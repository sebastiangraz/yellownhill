import { useEffect, useRef } from "react";
import "./CityParallax.css";
import { cityScene, DEFAULT_CITY, PALETTE } from "../scenes/city";

const HERO_SEEDS = [539, 12, 87, 204, 451, 76, 318, 9];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

type V2 = { x: number; y: number };
// A full 2-point-perspective projection (matches brushengine's ProjectionParams).
type Projection = {
  vpX: V2;
  vpZ: V2;
  origin: V2;
  perspective: number;
  verticalScale: number;
  zoom: number;
};
// Only the fields a profile actually animates while scrolling need to be listed.
type ProjectionPatch = {
  vpX?: Partial<V2>;
  vpZ?: Partial<V2>;
  origin?: Partial<V2>;
  perspective?: number;
  verticalScale?: number;
  zoom?: number;
};

const patchProjection = (b: Projection, p: ProjectionPatch): Projection => ({
  vpX: { ...b.vpX, ...p.vpX },
  vpZ: { ...b.vpZ, ...p.vpZ },
  origin: { ...b.origin, ...p.origin },
  perspective: p.perspective ?? b.perspective,
  verticalScale: p.verticalScale ?? b.verticalScale,
  zoom: p.zoom ?? b.zoom,
});

const lerpV2 = (a: V2, b: V2, t: number): V2 => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
});

const lerpProjection = (
  a: Projection,
  b: Projection,
  t: number,
): Projection => ({
  vpX: lerpV2(a.vpX, b.vpX, t),
  vpZ: lerpV2(a.vpZ, b.vpZ, t),
  origin: lerpV2(a.origin, b.origin, t),
  perspective: lerp(a.perspective, b.perspective, t),
  verticalScale: lerp(a.verticalScale, b.verticalScale, t),
  zoom: lerp(a.zoom, b.zoom, t),
});

// A profile is the projection at rest (`enter`, shown when the band first
// appears at the bottom of the viewport, t=0) plus `exit`, listing only the
// fields that move by the time it has scrolled to the top (t=1); apply() lerps
// between them. The engine projects the 3D city into NDC (-1..1) and stretches
// that to fill the canvas, so the canvas aspect ratio alone can't make a "wide"
// skyline — it just stretches the same composition. The footer reads as
// panoramic by spreading its vanishing points far apart horizontally, dropping
// them near the horizon, and flattening perspective/verticalScale into a low
// letterboxed band. To add a city, add an entry: a full `enter` + the moving
// fields in `exit`.
interface Profile {
  enter: Projection;
  exit: ProjectionPatch;
}

const PROFILES = {
  hero: {
    enter: {
      vpX: { x: 1.6, y: -1.5 },
      vpZ: { x: -3, y: -1.5 },
      origin: { x: 1, y: -3 },
      perspective: 0.75,
      verticalScale: 1.5,
      zoom: 0.4,
    },
    exit: { vpX: { y: -3.5 }, vpZ: { y: -3.5 }, origin: { y: -2 } },
  },
  footer: {
    enter: {
      vpX: { x: 8, y: -2 },
      vpZ: { x: -8, y: -2 },
      origin: { x: 0, y: -3 },
      perspective: 0.75,
      verticalScale: 1.5,
      zoom: 0.25,
    },
    exit: { vpX: { y: -1 }, vpZ: { y: -1 }, origin: { y: -2 } },
  },
} satisfies Record<string, Profile>;

interface CityParallaxProps {
  /** Seeds cycled through as the element scrolls past. */
  seeds?: number[];
  /** Wrapper class controlling sizing/placement. */
  className?: string;
  /** Projection profile: tall hero composition vs. wide footer band. */
  profile?: keyof typeof PROFILES;
}

export function CityParallax({
  seeds = HERO_SEEDS,
  className = "hero-canvas",
  profile = "hero",
}: CityParallaxProps = {}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let disposed = false;
    let cleanup = () => {};

    void (async () => {
      const { BrushEngine, loadBrushTextures, BRUSH_DATA_URIS } =
        await import("brushengine");
      PALETTE.yellow = "#f5a623";
      PALETTE.red = "#418015";
      PALETTE.teal = "#444";
      if (disposed) return;
      const brushUrls = [...BRUSH_DATA_URIS, "/brushes/custom.svg"];
      const customBrush = brushUrls.length - 1;
      const STROKE_WIDTH_SCALE: number = 0.7;

      const engine = new BrushEngine(canvas);
      engine.setBrushes(await loadBrushTextures(brushUrls));
      if (disposed) {
        engine.dispose();
        return;
      }
      engine.setGlobalStyle({
        thicknessFalloff: 0,
        brushOverride: customBrush,
        inkBlend: true,
      });
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
      const smooth = (x: number) =>
        x < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
      let lastSig = "";
      const setCity = (
        seed: number,
        gridSize: number,
        heightPeak: number,
        partialBox: number = DEFAULT_CITY.partialBox,
        guidelineLength: number = 0.6,
      ) => {
        const sig = `${seed}|${gridSize}|${heightPeak}|${partialBox}|${guidelineLength}`;
        if (sig === lastSig) return;
        lastSig = sig;
        const strokes = cityScene({
          ...DEFAULT_CITY,
          seed,
          gridSize,
          heightPeak,
          partialBox,
          guidelineLength,
        });
        if (STROKE_WIDTH_SCALE !== 1) {
          for (const s of strokes) s.style.widthPx *= STROKE_WIDTH_SCALE;
        }
        engine.setStrokes(strokes);
      };
      const SEEDS = seeds;
      setCity(SEEDS[0], 1, 0, 0, 0);
      const prof = PROFILES[profile];
      const enter = prof.enter;
      const exit = patchProjection(prof.enter, prof.exit);
      engine.setProjection(enter);

      const INTRO_MS = 4000;
      const INTRO_STEPS = 24; // discrete geometry rebuilds across the reveal
      let introStarted = false;
      let introDone = false;
      let introRaf = 0;
      let introT0 = 0;
      // Intro pans origin.x across a 2-unit sweep that lands on the profile's
      // resting origin.x (hero: -1 → 1; footer: -2 → 0 / centred).
      const originXFrom = enter.origin.x - 2;
      const originXTo: number = enter.origin.x;
      let introOriginX: number = originXTo;

      let raf = 0;

      const apply = () => {
        raf = 0;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const span = vh + rect.height;
        const t = clamp01(span > 0 ? (vh - rect.top) / span : 0);
        const proj = lerpProjection(enter, exit, t);
        proj.origin.x = introOriginX; // intro pan overrides the resting origin.x
        engine.setProjection(proj);

        if (introDone) {
          const i = Math.min(SEEDS.length - 1, Math.floor(t * SEEDS.length));
          setCity(SEEDS[i], 6, 1);
        }
      };

      const runIntro = (ts: number) => {
        if (!introT0) introT0 = ts;
        const e = smooth(clamp01((ts - introT0) / INTRO_MS));
        introOriginX = lerp(originXFrom, originXTo, e);
        const qe = Math.round(e * INTRO_STEPS) / INTRO_STEPS;
        setCity(
          SEEDS[0],
          Math.max(1, Math.round(lerp(1, 6, qe))),
          lerp(0, 1, qe),
          lerp(0, 0.8, qe),
          lerp(0, 0.6, qe),
        );
        apply();
        if (e < 1) {
          introRaf = requestAnimationFrame(runIntro);
        } else {
          introRaf = 0;
          setCity(SEEDS[0], 6, 1);
          apply();
          introDone = true;
        }
      };

      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(apply);
      };

      const ro = new ResizeObserver(() => {
        const r = wrap.getBoundingClientRect();
        engine.resize(r.width, r.height);
        apply();
      });
      ro.observe(wrap);

      let active = false;
      const io = new IntersectionObserver((entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible === active) return;
        active = visible;
        if (visible) {
          engine.start();
          window.addEventListener("scroll", onScroll, { passive: true });
          if (!introStarted) {
            introStarted = true;
            introRaf = requestAnimationFrame(runIntro);
          }
          apply();
        } else {
          window.removeEventListener("scroll", onScroll);
          if (raf) {
            cancelAnimationFrame(raf);
            raf = 0;
          }
          engine.stop();
        }
      });
      io.observe(wrap);

      cleanup = () => {
        io.disconnect();
        ro.disconnect();
        window.removeEventListener("scroll", onScroll);
        if (raf) cancelAnimationFrame(raf);
        if (introRaf) cancelAnimationFrame(introRaf);
        engine.dispose();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className={`${className} fade-starting`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} />
    </div>
  );
}
