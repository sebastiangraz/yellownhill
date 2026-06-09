import { useEffect, useRef } from "react";
import "./CityParallax.css";

// A fixed, full-viewport brush-rendered cityscape whose vanishing points are
// driven by scroll position — the camera lifts from a worm's-eye view toward
// eye-level as the page scrolls.
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
      engine.setStrokes(cityScene(DEFAULT_CITY));

      // Worm's-eye base camera that suits a skyline rising from a ground line
      // (matches the playground's city view) — this is the t=0 (top) state.
      const base = {
        vpX: { x: 2.2, y: -2 },
        vpZ: { x: -2.2, y: -2 },
        origin: { x: 0.5, y: -2 },
        perspective: 0.75,
        verticalScale: 1.5,
        zoom: 0.4,
      };
      engine.setProjection(base);
      engine.start();

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

      let raf = 0;
      // Map scroll progress (0 at top → 1 at bottom) onto the vanishing points.
      const apply = () => {
        raf = 0;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const t = clamp01(max > 0 ? window.scrollY / max : 0);
        engine.setProjection({
          ...base,
          // VPs drop toward the horizon and pull inward: worm's-eye → eye-level.
          vpX: { x: lerp(2.2, 1.25, t), y: lerp(-2, -0.55, t) },
          vpZ: { x: lerp(-2.2, -1.25, t), y: lerp(-2, -0.55, t) },
          origin: { x: lerp(0.5, 0, t), y: lerp(-2, -0.5, t) },
          zoom: lerp(0.4, 0.4, t),
        });
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
      window.addEventListener("scroll", onScroll, { passive: true });
      apply();

      cleanup = () => {
        window.removeEventListener("scroll", onScroll);
        ro.disconnect();
        if (raf) cancelAnimationFrame(raf);
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
