import * as React from "react";
import styles from "./TileDistort.module.css";
/* -------------------------------------------------------------------------- */
/*  CONTROLS                                                                   */
/*  Every control is a prop (see TileDistortProps). The DEFAULTS below are the */
/*  values used when a prop is omitted — edit them to change the baseline look.*/
/* -------------------------------------------------------------------------- */

export type FalloffCurve =
  | "linear"
  | "ease-in"
  | "ease-out"
  | "smoothstep"
  | "constant";

export type DistortionMode = "scatter" | "radial" | "vertical" | "horizontal";

/** Blend mode for the grout fill against the srcBackdrop beneath it. There are
 *  two modes — additive (plus-lighter) and subtractive (plus-darker) — each with
 *  a full-strength and a half-strength ("light" / "dark") variant. "normal" is
 *  no blending (plain source-over). */
export type GroutBlending =
  | "normal"
  | "plus-lighter"
  | "plus-light"
  | "plus-darker"
  | "plus-dark";

const DEFAULTS = {
  /** Number of tile columns. Rows are derived from the aspect ratio so tiles
   *  stay roughly square. */
  gridCols: 24,
  /** Hairline gap between tiles, in CSS pixels (the "grout" lines). */
  tileGap: 1,
  /** Peak displacement, in CSS pixels. The grid stays fixed; this is how far
   *  the image *underneath* the most-distorted tile is shifted. */
  distortionAmount: 64,
  /** Where distortion originates, in normalized 0..1 coords. (0,0)=top-left,
   *  (1,1)=bottom-right. Distortion grows with distance from this point. */
  originX: 0.0,
  originY: 1.0,
  /** Falloff curve: maps normalized distance-from-origin (0..1) to intensity. */
  falloffCurve: "ease-in" as FalloffCurve,
  /** Steepness of the falloff (used by ease-in / ease-out). 1=gentle, higher=sharp. */
  falloffPower: 2.4,
  /** Flip the curve so chaos sits at the ORIGIN and calm at the far edges. */
  invertFalloff: false,
  /** How each tile's image is pushed: scatter | radial | vertical | horizontal. */
  distortionMode: "scatter" as DistortionMode,
  /** Per-tile rotation at full intensity, in degrees. 0 disables rotation. */
  rotationAmount: 4,
  /** Seed for the pseudo-random scatter directions. */
  seed: 1337,
  /** When true, tiles fade in and slide from undistorted → distorted on mount. */
  animate: false,
  /** When true, tiles fade in (alpha 0→1) as they animate. When false, tiles
   *  are fully opaque and only slide into place. Requires animate. */
  animationFade: false,
  /** Total stagger spread, in ms, between the first and last tile to animate.
   *  Ordering follows distance from the origin (see staggerInvert). */
  stagger: 700,
  /** Duration of a single tile's fade + move, in ms. */
  duration: 800,
  /** Flip the stagger order: animate from the edges inward to the origin. */
  staggerInvert: false,
  /** Fraction of the distortion to animate, 0..1. 1 = animate the full travel
   *  (undistorted → distorted). 0.1 = start at 90% distorted and animate only
   *  the final 10%. */
  animationRange: 1,
  /** Draw the original (undistorted) image behind the tiles on the canvas, so
   *  the inter-tile gaps reveal the source image instead of transparency. */
  srcBackdrop: false,
  /** Gaussian blur radius (in CSS pixels) applied to the srcBackdrop only. 0 =
   *  off. The backdrop is over-drawn past the canvas edges so the blur samples
   *  real image content edge-to-edge — no black/transparent fringe or vignette. */
  backdropBlur: 0,
  /** Fill color painted behind the tiles (on top of srcBackdrop). When set and
   *  tileGap > 0, this becomes the color of the gaps ("grout"). Accepts any CSS
   *  color: hex, rgb(a), hsl(a), named colors, or var(--token). Empty = off. */
  groutColor: "",
  /** Blend mode for the grout fill over the srcBackdrop. "normal" = no blend;
   *  plus-lighter/plus-light add light (full / half strength); plus-darker/
   *  plus-dark subtract it. The "light"/"dark" variants are 50% less intense. */
  groutBlending: "normal" as GroutBlending,
  /** Render the canvas backing store at 2× the device pixel ratio so the source
   *  image is sampled at higher detail (crisper tiles). Costs more pixels/memory. */
  highRes: true,
};

/* -------------------------------------------------------------------------- */

const DEG = Math.PI / 180;

const clamp01 = (x: number) => Math.min(1, Math.max(0, x));

/** Eased progress for the fade + slide. */
const easeOutCubic = (x: number) => 1 - Math.pow(1 - x, 3);

/** Deterministic 0..1 PRNG so the layout is stable across renders. */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Resolves a CSS color string to one canvas can use. Plain colors (hex, rgb,
 *  hsl, named) pass through; var(--token) is resolved against `el`'s cascade. */
function resolveColor(color: string, el: HTMLElement): string {
  if (!color.includes("var(")) return color;
  const probe = document.createElement("span");
  probe.style.color = color;
  probe.style.display = "none";
  el.appendChild(probe);
  const resolved = getComputedStyle(probe).color;
  el.removeChild(probe);
  return resolved;
}

/** Parses any canvas-accepted color string into [r, g, b, a] with r/g/b in
 *  0..255 and a in 0..1, by painting one pixel and reading it back. */
function parseRGBA(color: string): [number, number, number, number] {
  const c = document.createElement("canvas");
  c.width = 1;
  c.height = 1;
  const cx = c.getContext("2d");
  if (!cx) return [0, 0, 0, 1];
  cx.fillStyle = color;
  cx.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = cx.getImageData(0, 0, 1, 1).data;
  return [r, g, b, a / 255];
}

/** Maps normalized distance t (0..1) to an intensity multiplier (0..1). */
function falloff(
  t: number,
  curve: FalloffCurve,
  power: number,
  invert: boolean,
): number {
  const clamped = Math.min(1, Math.max(0, t));
  let v: number;
  switch (curve) {
    case "constant":
      v = 1;
      break;
    case "ease-in":
      v = Math.pow(clamped, power);
      break;
    case "ease-out":
      v = 1 - Math.pow(1 - clamped, power);
      break;
    case "smoothstep":
      v = clamped * clamped * (3 - 2 * clamped);
      break;
    case "linear":
    default:
      v = clamped;
      break;
  }
  return invert ? 1 - v : v;
}

export type TileDistortProps = {
  /** Image URL to tile. Any same-origin or CORS-enabled image works. */
  src: string;
  className?: string;
  /** Number of tile columns. */
  gridCols?: number;
  /** Hairline gap between tiles, in CSS pixels. */
  tileGap?: number;
  /** Peak source displacement, in CSS pixels. */
  distortionAmount?: number;
  /** Distortion origin X, normalized 0..1. */
  originX?: number;
  /** Distortion origin Y, normalized 0..1. */
  originY?: number;
  /** Distance→intensity falloff curve. */
  falloffCurve?: FalloffCurve;
  /** Falloff steepness (ease-in / ease-out). */
  falloffPower?: number;
  /** Flip the falloff curve. */
  invertFalloff?: boolean;
  /** Direction the image is pushed under each tile. */
  distortionMode?: DistortionMode;
  /** Per-tile rotation at full intensity, in degrees. */
  rotationAmount?: number;
  /** PRNG seed for scatter directions. */
  seed?: number;
  /** Animate tiles in (fade + slide from undistorted to distorted). */
  animate?: boolean;
  /** Fade tiles in (alpha 0→1) during the animation. When false, tiles stay
   *  opaque and only slide. Requires animate. */
  animationFade?: boolean;
  /** Total stagger spread between first and last tile, in ms. */
  stagger?: number;
  /** Duration of a single tile's animation, in ms. */
  duration?: number;
  /** Animate from the edges inward to the origin instead of origin outward. */
  staggerInvert?: boolean;
  /** Fraction of the distortion to animate, 0..1 (1 = full travel). */
  animationRange?: number;
  /** Draw the original image behind the tiles to hide the inter-tile gaps. */
  srcBackdrop?: boolean;
  /** Gaussian blur radius (in CSS pixels) for the srcBackdrop. 0 = off. */
  backdropBlur?: number;
  /** Color of the tile gaps, painted behind the tiles (on top of srcBackdrop).
   *  Accepts hex, rgb(a), hsl(a), named colors, or var(--token). */
  groutColor?: string;
  /** Blend mode for the grout fill over the srcBackdrop (additive / subtractive,
   *  each with a full and a half-strength variant). */
  groutBlending?: GroutBlending;
  /** Render the canvas at 2× the device pixel ratio for higher-DPI (crisper)
   *  source sampling. */
  highRes?: boolean;
};

export function TileDistort({
  src,
  className,
  gridCols = DEFAULTS.gridCols,
  tileGap = DEFAULTS.tileGap,
  distortionAmount = DEFAULTS.distortionAmount,
  originX = DEFAULTS.originX,
  originY = DEFAULTS.originY,
  falloffCurve = DEFAULTS.falloffCurve,
  falloffPower = DEFAULTS.falloffPower,
  invertFalloff = DEFAULTS.invertFalloff,
  distortionMode = DEFAULTS.distortionMode,
  rotationAmount = DEFAULTS.rotationAmount,
  seed = DEFAULTS.seed,
  animate = DEFAULTS.animate,
  animationFade = DEFAULTS.animationFade,
  stagger = DEFAULTS.stagger,
  duration = DEFAULTS.duration,
  staggerInvert = DEFAULTS.staggerInvert,
  animationRange = DEFAULTS.animationRange,
  srcBackdrop = DEFAULTS.srcBackdrop,
  backdropBlur = DEFAULTS.backdropBlur,
  groutColor = DEFAULTS.groutColor,
  groutBlending = DEFAULTS.groutBlending,
  highRes = DEFAULTS.highRes,
}: TileDistortProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const wrapRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [ready, setReady] = React.useState(false);

  // Load the image whenever src changes.
  React.useEffect(() => {
    setReady(false);
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      imgRef.current = img;
      setReady(true);
    };
    img.src = src;
    return () => {
      img.onload = null;
    };
  }, [src]);

  // Draw + redraw on size or control changes.
  React.useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!canvas || !wrap || !img || !ready) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Resolve once per effect run so var(--token) is read in the wrap's cascade
    // and we don't touch the DOM every animation frame.
    const fillColor = groutColor ? resolveColor(groutColor, wrap) : "";

    // Resolve the grout blend into a mode + a strength (the "light"/"dark"
    // variants are half-strength). "lighter" is canvas' additive plus-lighter.
    // "darker" is plus-darker, emulated as a linear burn below so it renders
    // identically everywhere — Chrome's canvas has no native plus-darker op.
    const groutBlend: {
      kind: "normal" | "lighter" | "darker";
      strength: number;
    } = {
      "plus-lighter": { kind: "lighter", strength: 1 },
      "plus-light": { kind: "lighter", strength: 0.5 },
      "plus-darker": { kind: "darker", strength: 1 },
      "plus-dark": { kind: "darker", strength: 0.5 },
      normal: { kind: "normal", strength: 1 },
    }[groutBlending] as { kind: "normal" | "lighter" | "darker"; strength: number };

    // Grout channels are needed as numbers for the linear-burn math; parse the
    // resolved color once via a 1×1 scratch canvas (handles hex/rgb/hsl/named).
    const groutRGBA = fillColor ? parseRGBA(fillColor) : null;

    // elapsed === null  → fully settled (final) frame
    // elapsed is ms      → animated frame at that time since start
    const draw = (elapsed: number | null) => {
      const dpr = (window.devicePixelRatio || 1) * (highRes ? 2 : 1);
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (w === 0 || h === 0) return;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cols = Math.max(1, Math.round(gridCols));
      // Nominal square cell used only to derive the row count from the aspect ratio.
      const cellW = w / cols;
      const rows = Math.max(1, Math.round(h / cellW));
      // Uniform tile size with gaps living *between* tiles: cols tiles plus
      // (cols-1) interior gaps span the full width, so every tile is identical
      // and the grid hugs all four edges (no trailing gap right/bottom). pitch
      // is the per-tile stride (tile size + one gap).
      const drawW = (w - (cols - 1) * tileGap) / cols;
      const drawH = (h - (rows - 1) * tileGap) / rows;
      const pitchX = drawW + tileGap;
      const pitchY = drawH + tileGap;

      // "cover" mapping: figure out the region of the source image that fills
      // the canvas without distortion, then slice that region into the grid.
      const scale = Math.max(w / img.width, h / img.height);
      const visibleW = w / scale; // visible image region, in image pixels
      const visibleH = h / scale;
      const srcOffX = (img.width - visibleW) / 2;
      const srcOffY = (img.height - visibleH) / 2;
      const srcTileW = visibleW / cols;
      const srcTileH = visibleH / rows;

      // Backdrop: paint the original "cover"-mapped image first so the tiles
      // (and their gaps) sit on top of it. The gaps reveal the source image
      // instead of transparency.
      if (srcBackdrop) {
        if (backdropBlur > 0) {
          // Low-res base layer. A CSS-style blur() samples transparent pixels
          // past the canvas edges, so the blurred image alone fades to a dark
          // halo at the borders. To fix that without scaling the image, first
          // paint a tiny (~8%) copy scaled back up to fill the frame: upscaling
          // it is inherently smooth, it reaches every edge, and it carries the
          // correct colors — so the blurred layer's faded fringe reveals matching
          // color underneath instead of a vignette.
          const lw = Math.max(1, Math.round(w * 0.08));
          const lh = Math.max(1, Math.round(h * 0.08));
          const low = document.createElement("canvas");
          low.width = lw;
          low.height = lh;
          const lctx = low.getContext("2d");
          if (lctx) {
            lctx.drawImage(
              img,
              srcOffX,
              srcOffY,
              visibleW,
              visibleH,
              0,
              0,
              lw,
              lh,
            );
            ctx.drawImage(low, 0, 0, lw, lh, 0, 0, w, h);
          }
          // Sharp, in-place blur on top (no scaling).
          ctx.filter = `blur(${backdropBlur}px)`;
          ctx.drawImage(img, srcOffX, srcOffY, visibleW, visibleH, 0, 0, w, h);
          ctx.filter = "none";
        } else {
          ctx.drawImage(img, srcOffX, srcOffY, visibleW, visibleH, 0, 0, w, h);
        }
      }

      // Gap color: painted on top of the srcBackdrop, behind the tiles. With
      // tileGap > 0 the uncovered gaps show this color ("grout"). groutBlending
      // controls how it composites against the backdrop (save/restore so the
      // op + alpha don't leak into the tile draw below).
      if (fillColor && groutRGBA) {
        ctx.save();
        if (groutBlend.kind === "darker") {
          // plus-darker = linear burn: max(0, D - A·(1 - S)), i.e. subtract the
          // grout's darkness (weighted by its alpha × strength) from the
          // backdrop. Chrome's canvas lacks a native plus-darker op, so build it
          // from ops it does have: invert the canvas ("difference" vs white),
          // ADD the scaled inverse-grout ("lighter"), then invert back. The two
          // inversions turn the additive op into the subtractive burn.
          const A = groutRGBA[3] * groutBlend.strength; // 0..1
          const inv = (ch: number) => Math.round(A * (255 - ch));
          ctx.globalAlpha = 1;
          ctx.globalCompositeOperation = "difference";
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
          ctx.globalCompositeOperation = "lighter";
          ctx.fillStyle = `rgb(${inv(groutRGBA[0])}, ${inv(groutRGBA[1])}, ${inv(groutRGBA[2])})`;
          ctx.fillRect(0, 0, w, h);
          ctx.globalCompositeOperation = "difference";
          ctx.fillStyle = "#ffffff";
          ctx.fillRect(0, 0, w, h);
        } else {
          // normal → source-over; plus-lighter → additive "lighter". strength
          // scales the deposited color (the half-strength "light" variant).
          ctx.globalCompositeOperation =
            groutBlend.kind === "lighter" ? "lighter" : "source-over";
          ctx.globalAlpha = groutBlend.strength;
          ctx.fillStyle = fillColor;
          ctx.fillRect(0, 0, w, h);
        }
        ctx.restore();
      }

      const maxDist = Math.hypot(
        Math.max(originX, 1 - originX),
        Math.max(originY, 1 - originY),
      );

      const rand = mulberry32(seed);

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          // Per-tile random direction, consumed in a stable order.
          const angle = rand() * Math.PI * 2;

          // Normalized tile-center position in 0..1 space.
          const nx = (c + 0.5) / cols;
          const ny = (r + 0.5) / rows;

          const dx = nx - originX;
          const dy = ny - originY;
          const dist = Math.hypot(dx, dy) / (maxDist || 1);
          const intensity = falloff(
            dist,
            falloffCurve,
            falloffPower,
            invertFalloff,
          );
          const mag = distortionAmount * intensity;

          // Per-tile animation progress (0 = undistorted/transparent, 1 = final).
          // The tile's delay is its distance-from-origin order × the stagger
          // spread; staggerInvert reverses center-out into edges-in.
          let prog = 1;
          if (elapsed !== null) {
            const order = staggerInvert ? 1 - dist : dist;
            const delay = order * stagger;
            prog = easeOutCubic(clamp01((elapsed - delay) / duration));
          }
          // Fade is opt-in: when animationFade is off, tiles only slide in.
          const alpha = animationFade ? prog : 1;
          // Spatial travel: only `animationRange` of the distortion is animated;
          // the remainder is applied immediately as a static starting offset.
          const range = clamp01(animationRange);
          const move = elapsed === null ? 1 : 1 - range + range * prog;

          let ox = 0;
          let oy = 0;
          switch (distortionMode) {
            case "radial": {
              const len = Math.hypot(dx, dy) || 1;
              ox = (dx / len) * mag;
              oy = (dy / len) * mag;
              break;
            }
            case "vertical":
              oy = Math.cos(angle) * mag;
              break;
            case "horizontal":
              ox = Math.cos(angle) * mag;
              break;
            case "scatter":
            default:
              ox = Math.cos(angle) * mag;
              oy = Math.sin(angle) * mag;
              break;
          }

          // Scale the displacement + rotation by `move` so the image starts at
          // its static offset (1 - range) and settles into the full offset.
          ox *= move;
          oy *= move;

          const rot =
            rotationAmount *
            DEG *
            intensity *
            move *
            (Math.cos(angle) >= 0 ? 1 : -1);

          // The tile (the "mask") stays put on the fixed grid. Distortion moves
          // the image *underneath* it, so we offset the SOURCE sample region,
          // not the destination rect.
          const destX = c * pitchX;
          const destY = r * pitchY;
          const destW = drawW;
          const destH = drawH;

          // Overscan so a rotated tile still fully covers its (square) window
          // instead of leaving transparent corner triangles.
          const over =
            rot !== 0 ? Math.abs(Math.sin(rot)) + Math.abs(Math.cos(rot)) : 1;

          // Destination draw rect: the fixed window, inflated by overscan.
          const ddW = destW * over;
          const ddH = destH * over;
          const ddX = destX - (ddW - destW) / 2;
          const ddY = destY - (ddH - destH) / 2;

          // Source region: shifted by the distortion (in image px), inflated to
          // match the overscan, then clamped to stay on real image pixels.
          const ssW = srcTileW * over;
          const ssH = srcTileH * over;
          let sx = srcOffX + c * srcTileW - (ssW - srcTileW) / 2 - ox / scale;
          let sy = srcOffY + r * srcTileH - (ssH - srcTileH) / 2 - oy / scale;
          sx = Math.min(Math.max(sx, 0), Math.max(0, img.width - ssW));
          sy = Math.min(Math.max(sy, 0), Math.max(0, img.height - ssH));

          ctx.save();
          ctx.globalAlpha = alpha;
          // Clip to the fixed tile window so shifted/rotated content can't bleed
          // into neighbouring tiles.
          ctx.beginPath();
          ctx.rect(destX, destY, destW, destH);
          ctx.clip();
          if (rot !== 0) {
            const cxp = destX + destW / 2;
            const cyp = destY + destH / 2;
            ctx.translate(cxp, cyp);
            ctx.rotate(rot);
            ctx.translate(-cxp, -cyp);
          }
          ctx.drawImage(img, sx, sy, ssW, ssH, ddX, ddY, ddW, ddH);
          ctx.restore();
        }
      }
    };

    let raf = 0;
    let start = 0;
    const total = stagger + duration; // when every tile has finished

    if (animate) {
      start = performance.now();
      const tick = () => {
        const elapsed = performance.now() - start;
        draw(elapsed);
        if (elapsed < total) {
          raf = requestAnimationFrame(tick);
        } else {
          draw(null); // settle exactly on the final frame
        }
      };
      raf = requestAnimationFrame(tick);
    } else {
      draw(null);
    }

    // Redraw on resize at the current animation time (or settled if static).
    const ro = new ResizeObserver(() => {
      draw(animate ? performance.now() - start : null);
    });
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [
    ready,
    gridCols,
    tileGap,
    distortionAmount,
    originX,
    originY,
    falloffCurve,
    falloffPower,
    invertFalloff,
    distortionMode,
    rotationAmount,
    seed,
    animate,
    animationFade,
    stagger,
    duration,
    staggerInvert,
    animationRange,
    srcBackdrop,
    backdropBlur,
    groutColor,
    groutBlending,
    highRes,
  ]);

  return (
    <div
      ref={wrapRef}
      className={[styles.root, className].filter(Boolean).join(" ")}
    >
      <canvas ref={canvasRef} />
    </div>
  );
}

export default TileDistort;
