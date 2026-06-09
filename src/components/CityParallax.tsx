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
      const {
        BrushEngine,
        loadBrushTextures,
        cityScene,
        DEFAULT_CITY,
        projectNDC,
      } = await import("brushengine");
      if (disposed) return;

      const engine = new BrushEngine(canvas);
      engine.setBrushes(await loadBrushTextures());
      if (disposed) {
        engine.dispose();
        return;
      }
      const strokes = cityScene(DEFAULT_CITY);
      engine.setStrokes(strokes);

      // Robust world bounds for framing. The city includes sparse guideline and
      // spire strokes that overshoot far past the buildings; including them in
      // the fit would shrink the whole skyline just to keep a few thin outliers
      // on screen. So we trim a small fraction off each axis and frame the
      // building MASS — the overshoots simply run past the canvas edge, which is
      // their intended look. The projection is projective, so this box (all w > 0)
      // maps into the convex hull of its projected corners.
      const FIT_TRIM = 0.2; // ignore the outermost 5% of points per axis
      const axisBounds = (k: number): [number, number] => {
        const v: number[] = [];
        for (const s of strokes) for (const p of s.points) v.push(p[k]);
        v.sort((a, b) => a - b);
        const at = (f: number) =>
          v[
            Math.min(v.length - 1, Math.max(0, Math.round(f * (v.length - 1))))
          ];
        return [at(FIT_TRIM), at(1 - FIT_TRIM)];
      };
      const [xlo, xhi] = axisBounds(0);
      const [ylo, yhi] = axisBounds(1);
      const [zlo, zhi] = axisBounds(2);
      const corners: [number, number, number][] = [];
      for (const x of [xlo, xhi])
        for (const y of [ylo, yhi])
          for (const z of [zlo, zhi]) corners.push([x, y, z]);

      // Worm's-eye base camera that suits a skyline rising from a ground line
      // (matches the playground's city view) — this is the t=0 (top) state.
      const base = {
        vpX: { x: 2.2, y: 0 },
        vpZ: { x: -2.2, y: 0 },
        origin: { x: 0.5, y: 0 },
        perspective: 0.75,
        verticalScale: 1.5,
        zoom: 0.4,
      };
      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
      const clamp01 = (x: number) => Math.max(0, Math.min(1, x));

      // Camera for a given scroll progress t; the fit below supplies the zoom.
      // The vanishing points drop toward the horizon and pull inward as you
      // scroll — a worm's-eye view lifting toward eye-level.
      const paramsAt = (t: number, zoom: number) => ({
        ...base,
        // vpX: { x: lerp(2.2, 1.25, t), y: lerp(0.5, -5, t) },
        // vpZ: { x: lerp(-2.2, -1.25, t), y: lerp(0.5, -5, t) },
        origin: { x: lerp(0.5, 0, t), y: lerp(-10, 10, t) },
        zoom,
      });

      // Auto-fit zoom. The renderer fits the model into a centred square of side
      // min(w, h), so the visible half-extents in projected space are
      // (w/min, h/min): one axis is 1, the other ≥ 1. A tall skyline therefore
      // clips first along the vertical axis of a wide viewport. We sample the
      // whole scroll range and pick the single zoom that frames the worst case —
      // so the city never clips and never pulses in size while scrolling.
      const FIT_PAD = 0.9; // 10% breathing room around the skyline
      let fitZoom = 0.4;
      const computeFit = (w: number, h: number) => {
        const minDim = Math.min(w, h) || 1;
        const rx = w / minDim;
        const ry = h / minDim;
        let maxX = 1e-3;
        let maxY = 1e-3;
        const SAMPLES = 12;
        for (let s = 0; s <= SAMPLES; s++) {
          const p = paramsAt(s / SAMPLES, 1);
          for (const c of corners) {
            const q = projectNDC(c, p);
            if (q.w <= 1e-4) continue; // behind the camera — ignore
            if (Math.abs(q.x) > maxX) maxX = Math.abs(q.x);
            if (Math.abs(q.y) > maxY) maxY = Math.abs(q.y);
          }
        }
        fitZoom = FIT_PAD * Math.min(rx / maxX, ry / maxY);
      };

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
        engine.setProjection(paramsAt(t, fitZoom));
      };

      // Seed the fit before the observers fire so the first frame is framed.
      const r0 = wrap.getBoundingClientRect();
      computeFit(r0.width, r0.height);
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(apply);
      };

      const ro = new ResizeObserver(() => {
        const r = wrap.getBoundingClientRect();
        engine.resize(r.width, r.height);
        computeFit(r.width, r.height); // aspect changed — refit
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
