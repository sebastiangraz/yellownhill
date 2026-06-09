import { useEffect, useRef } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/CityParallax.tsx
function CityParallax() {
	const wrapRef = useRef(null);
	const canvasRef = useRef(null);
	useEffect(() => {
		const wrap = wrapRef.current;
		const canvas = canvasRef.current;
		if (!wrap || !canvas) return;
		let disposed = false;
		let cleanup = () => {};
		(async () => {
			const { BrushEngine, loadBrushTextures, cityScene, DEFAULT_CITY } = await import("brushengine");
			if (disposed) return;
			const engine = new BrushEngine(canvas);
			engine.setBrushes(await loadBrushTextures());
			if (disposed) {
				engine.dispose();
				return;
			}
			engine.setStrokes(cityScene(DEFAULT_CITY));
			const base = {
				vpX: {
					x: 2.2,
					y: -2
				},
				vpZ: {
					x: -2.2,
					y: -2
				},
				origin: {
					x: .5,
					y: -2
				},
				perspective: .75,
				verticalScale: 1.5,
				zoom: .4
			};
			engine.setProjection(base);
			engine.start();
			const lerp = (a, b, t) => a + (b - a) * t;
			const clamp01 = (x) => Math.max(0, Math.min(1, x));
			let raf = 0;
			const apply = () => {
				raf = 0;
				const max = document.documentElement.scrollHeight - window.innerHeight;
				const t = clamp01(max > 0 ? window.scrollY / max : 0);
				engine.setProjection({
					...base,
					vpX: {
						x: lerp(2.2, 1.25, t),
						y: lerp(-2, -.55, t)
					},
					vpZ: {
						x: lerp(-2.2, -1.25, t),
						y: lerp(-2, -.55, t)
					},
					origin: {
						x: lerp(.5, 0, t),
						y: lerp(-2, -.5, t)
					},
					zoom: lerp(.4, .62, t)
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
	return /* @__PURE__ */ jsx("div", {
		ref: wrapRef,
		className: "city-canvas",
		"aria-hidden": "true",
		children: /* @__PURE__ */ jsx("canvas", { ref: canvasRef })
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function RouteComponent() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(CityParallax, {}), /* @__PURE__ */ jsxs("div", {
		className: "parallax-page",
		children: [
			/* @__PURE__ */ jsxs("section", {
				className: "parallax-panel",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "tag",
						children: "Yellownhill"
					}),
					/* @__PURE__ */ jsx("h1", { children: "A city drawn in two-point perspective." }),
					/* @__PURE__ */ jsx("p", { children: "Every line is a brush stroke under a custom projection. Scroll and the vanishing points lift the skyline from a worm's-eye view toward eye-level." })
				]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "parallax-panel right",
				children: [/* @__PURE__ */ jsx("h2", { children: "Generative" }), /* @__PURE__ */ jsx("p", { children: "The whole skyline is a pure function of a seed — reproducible, tweakable, and rendered live in WebGL." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "parallax-panel",
				children: [/* @__PURE__ */ jsx("h2", { children: "Hand-drawn ink" }), /* @__PURE__ */ jsx("p", { children: "Overlapping strokes multiply like real ink on a transparent canvas, so the page shows through and crossings darken." })]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "parallax-panel right",
				children: [/* @__PURE__ */ jsx("h2", { children: "Keep scrolling" }), /* @__PURE__ */ jsx("p", { children: "The vanishing points have come to rest at eye level." })]
			})
		]
	})] });
}
//#endregion
export { RouteComponent as component };
