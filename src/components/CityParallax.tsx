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
      const { BrushEngine, loadBrushTextures, cityScene, DEFAULT_CITY } =
        await import("brushengine");
      if (disposed) return;

      const engine = new BrushEngine(canvas);
      engine.setBrushes(await loadBrushTextures());
      if (disposed) {
        engine.dispose();
        return;
      }
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
      const smooth = (x: number) => x * x * (3 - 2 * x); // smoothstep ease

      // City regeneration. heightPeak, gridSize and seed all change the GEOMETRY,
      // so each needs cityScene() + setStrokes() (which rebuilds the GPU buffers).
      // Dedupe on a signature so repeated calls during animation only rebuild when
      // something actually changed; heightPeak is quantised to keep the rebuild
      // count sane while staying visually smooth.
      const PEAK_QUANT = 24;
      let lastSig = "";
      const setCity = (seed: number, gridSize: number, heightPeak: number) => {
        const peak = Math.round(heightPeak * PEAK_QUANT) / PEAK_QUANT;
        const sig = `${seed}|${gridSize}|${peak}`;
        if (sig === lastSig) return;
        lastSig = sig;
        engine.setStrokes(
          cityScene({ ...DEFAULT_CITY, seed, gridSize, heightPeak: peak }),
        );
      };

      // Seeds cycled while scrolling past. Index 0 is what the intro grows into,
      // so the reveal lands on it before scrolling cycles through the rest.
      const SEEDS = [539, 12, 87, 204, 451, 76, 318, 9];

      // Start as a single short building; the intro grows it into a full city.
      setCity(SEEDS[0], 1, 0);

      // Worm's-eye base camera that suits a skyline rising from a ground line.
      const base = {
        vpX: { x: 1.8, y: -1.5 },
        vpZ: { x: -2.6, y: -1.5 },
        origin: { x: 1, y: -1.5 },
        perspective: 0.75,
        verticalScale: 1.5,
        zoom: 0.55,
      };
      engine.setProjection(base);

      // Intro reveal: grow gridSize 1→6 and heightPeak 0→1 over ~2s, once, when
      // the band first enters view (time-based, not scroll-driven). gridSize is a
      // structural param so each step reshuffles the layout — combined with the
      // rising heightPeak it reads as the city building itself up.
      const INTRO_MS = 2000;
      let introStarted = false;
      let introDone = false;
      let introRaf = 0;
      let introT0 = 0;

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
          vpX: { x: 1.8, y: lerp(-1.5, -3, t) },
          vpZ: { x: -2.6, y: lerp(-1.5, -3, t) },
          origin: { x: 1, y: lerp(-3, -1, t) },
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
        setCity(SEEDS[0], Math.max(1, Math.round(lerp(1, 6, e))), e);
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
