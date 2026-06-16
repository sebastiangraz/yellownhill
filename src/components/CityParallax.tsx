import { useEffect, useRef } from "react";
import "./CityParallax.css";
import { cityScene, DEFAULT_CITY, PALETTE } from "../scenes/city";

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
      const { BrushEngine, loadBrushTextures, BRUSH_DATA_URIS } =
        await import("brushengine");
      PALETTE.yellow = "#f5a623";
      PALETTE.red = "#418015";
      PALETTE.teal = "#2d7dd2";
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
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
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
      const SEEDS = [539, 12, 87, 204, 451, 76, 318, 9];
      setCity(SEEDS[0], 1, 0, 0, 0);
      const base = {
        vpX: { x: 1.8, y: -1.5 },
        vpZ: { x: -2.6, y: -1.5 },
        origin: { x: 1, y: -1.5 },
        perspective: 0.75,
        verticalScale: 1.5,
        zoom: 0.4,
      };
      engine.setProjection(base);

      const INTRO_MS = 4000;
      const INTRO_STEPS = 24; // discrete geometry rebuilds across the reveal
      let introStarted = false;
      let introDone = false;
      let introRaf = 0;
      let introT0 = 0;
      let introOriginX = base.origin.x; // intro pans origin.x from -1 → 1

      let raf = 0;

      const apply = () => {
        raf = 0;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const span = vh + rect.height;
        const t = clamp01(span > 0 ? (vh - rect.top) / span : 0);
        engine.setProjection({
          ...base,
          vpX: { x: 1.6, y: lerp(-1.5, -3.5, t) },
          vpZ: { x: -3, y: lerp(-1.5, -3.5, t) },
          origin: { x: introOriginX, y: lerp(-3, -2, t) },
        });

        if (introDone) {
          const i = Math.min(SEEDS.length - 1, Math.floor(t * SEEDS.length));
          setCity(SEEDS[i], 6, 1);
        }
      };

      const runIntro = (ts: number) => {
        if (!introT0) introT0 = ts;
        const e = smooth(clamp01((ts - introT0) / INTRO_MS));
        introOriginX = lerp(-1, 1, e);
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
    <div ref={wrapRef} className="hero-canvas fade-starting" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
