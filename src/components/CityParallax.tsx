import { useEffect, useRef } from "react";
import "./CityParallax.css";

// An in-flow brush-rendered cityscape. On first entering view it plays a ~2s
// intro that grows the city from a single short building to a full skyline
// (gridSize 1→6, heightPeak 0→1). Thereafter scrolling lifts the camera
// (worm's-eye → eye-level via the vanishing points) and cycles the seed, so the
// skyline morphs through different layouts as the band passes.
//
// The brush engine touches `document` at import time, so it is imported
// dynamically inside the effect (client-only) — never during SSR.
export function CityParallax() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let disposed = false;
    let cleanup = () => {};

    void (async () => {
      const {
        BrushEngine,
        loadBrushTextures,
        cityScene,
        DEFAULT_CITY,
        BRUSH_DATA_URIS,
        PALETTE,
      } = await import("brushengine");

      // Override the library's built-in ink palette. PALETTE is the same object
      // reference used internally by cityScene, so mutating its properties here
      // (before any cityScene call) is enough — no library patching required.
      PALETTE.yellow = "#f5a623";
      PALETTE.red = "#418015";
      PALETTE.teal = "#2d7dd2";

      // Other options:
      // PALETTE.yellow = "#f5a623";
      // PALETTE.red = "#418015";
      // PALETTE.teal = "#2d7dd2";
      if (disposed) return;

      // Brushes are referenced by numeric index. We keep the package's built-in
      // brushes (BRUSH_DATA_URIS = indices 0,1) and append our own stroke served
      // from yellownhill's /public — so the custom brush is the last index. Edit
      // public/brushes/custom.svg to change it; the file is loaded at runtime, no
      // brushengine rebuild needed.
      const brushUrls = [...BRUSH_DATA_URIS, "/brushes/custom.svg"];
      const customBrush = brushUrls.length - 1;

      // Global stroke-width multiplier. brushengine bakes width into each stroke
      // (style.widthPx) and has no global knob, so we scale every stroke after
      // cityScene() generates it. 1 = engine defaults; >1 thicker, <1 thinner.
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
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
      const smooth = (x: number) =>
        x < 0.5
          ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
          : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;

      //cubic ease

      // City regeneration. seed, gridSize, heightPeak and partialBox all change
      // the GEOMETRY, so each needs cityScene() + setStrokes() (which rebuilds the
      // GPU buffers). Dedupe on a signature so repeated calls during animation only
      // rebuild when something actually changed; the continuous params are quantised
      // to keep the rebuild count sane while staying visually smooth.
      let lastSig = "";
      const setCity = (
        seed: number,
        gridSize: number,
        heightPeak: number,
        partialBox: number = DEFAULT_CITY.partialBox,
        guidelineLength: number = 0.6,
      ) => {
        // Dedupe on the EXACT param values. Resting/scroll calls pass exact values
        // and generate exactly (e.g. partialBox 0.8 — not a quantised 0.7916…). The
        // intro keeps the rebuild count bounded by quantising its PROGRESS instead
        // (see INTRO_STEPS in runIntro), which still lands on the exact endpoints.
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

      // Seeds cycled while scrolling past. Index 0 is what the intro grows into,
      // so the reveal lands on it before scrolling cycles through the rest.
      const SEEDS = [539, 12, 87, 204, 451, 76, 318, 9];

      // Start as a single short building; the intro grows it into a full city.
      setCity(SEEDS[0], 1, 0, 0, 0);

      // Worm's-eye base camera that suits a skyline rising from a ground line.
      const base = {
        vpX: { x: 1.8, y: -1.5 },
        vpZ: { x: -2.6, y: -1.5 },
        origin: { x: 1, y: -1.5 },
        perspective: 0.75,
        verticalScale: 1.5,
        zoom: 0.4,
      };
      engine.setProjection(base);

      // Intro reveal: over ~2s on first entering view (time-based, not scroll-
      // driven) grow gridSize 1→6, heightPeak 0→1, partialBox (half-drawn boxes)
      // 0→0.8 and guidelineLength 0→0.6. gridSize and partialBox are structural so
      // each step reshuffles the linework; heightPeak and guidelineLength are pure
      // multipliers that grow smoothly. Together it reads as the city building up.
      const INTRO_MS = 4000;
      const INTRO_STEPS = 24; // discrete geometry rebuilds across the reveal
      let introStarted = false;
      let introDone = false;
      let introRaf = 0;
      let introT0 = 0;
      let introOriginX = base.origin.x; // intro pans origin.x from -1 → 1

      let raf = 0;
      // Progress as THIS element travels through the viewport: 0 when its top
      // reaches the bottom edge, 1 when its bottom clears the top edge.
      const apply = () => {
        raf = 0;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const span = vh + rect.height;
        const t = clamp01(span > 0 ? (vh - rect.top) / span : 0);

        // Vanishing points — cheap projection tweak, every frame.
        engine.setProjection({
          ...base,
          vpX: { x: 1.6, y: lerp(-1.5, -3.5, t) },
          vpZ: { x: -3, y: lerp(-1.5, -3.5, t) },
          origin: { x: introOriginX, y: lerp(-3, -2, t) },
        });

        // After the reveal, scroll cycles the seed → a fresh full-city layout.
        if (introDone) {
          const i = Math.min(SEEDS.length - 1, Math.floor(t * SEEDS.length));
          setCity(SEEDS[i], 6, 1);
        }
      };

      const runIntro = (ts: number) => {
        if (!introT0) introT0 = ts;
        const e = smooth(clamp01((ts - introT0) / INTRO_MS));
        introOriginX = lerp(-1, 1, e); // pan the origin across during the reveal
        // Quantise PROGRESS (not the values) so geometry rebuilds a bounded number
        // of times yet still hits the exact endpoints at qe = 0 and qe = 1.
        const qe = Math.round(e * INTRO_STEPS) / INTRO_STEPS;
        setCity(
          SEEDS[0],
          Math.max(1, Math.round(lerp(1, 6, qe))),
          lerp(0, 1, qe),
          lerp(0, 0.8, qe),
          lerp(0, 0.6, qe),
        );
        apply(); // push the projection (origin.x = introOriginX) each intro frame
        if (e < 1) {
          introRaf = requestAnimationFrame(runIntro);
        } else {
          introRaf = 0;
          // Always land the reveal on the hero seed (SEEDS[0] = 539), regardless
          // of how far the user scrolled during the intro. apply() runs while
          // introDone is still false, so it only syncs the camera and leaves the
          // city on 539; seed cycling resumes on the next scroll.
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

      // Only run the parallax (and the render loop) while the band is on screen.
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
    <div ref={wrapRef} className="city-canvas" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
