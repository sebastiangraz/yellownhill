import { useEffect, useRef } from "react";
import "./CityParallax.css";

// An in-flow brush-rendered cityscape whose vanishing points are
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

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

      let raf = 0;
      // Progress as THIS element travels through the viewport: 0 when its top
      // reaches the bottom edge, 1 when its bottom clears the top edge — so the
      // parallax is relative to the band, not the document root.
      const apply = () => {
        raf = 0;
        const rect = wrap.getBoundingClientRect();
        const vh = window.innerHeight || 1;
        const span = vh + rect.height;
        const t = clamp01(span > 0 ? (vh - rect.top) / span : 0);
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

      // Only run the parallax (and the render loop) while the band is on screen.
      let active = false;
      const io = new IntersectionObserver((entries) => {
        const visible = entries.some((e) => e.isIntersecting);
        if (visible === active) return;
        active = visible;
        if (visible) {
          engine.start();
          window.addEventListener("scroll", onScroll, { passive: true });
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
