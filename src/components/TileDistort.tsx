import * as React from "react";

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
  /** Total stagger spread, in ms, between the first and last tile to animate.
   *  Ordering follows distance from the origin (see staggerInvert). */
  stagger: 700,
  /** Duration of a single tile's fade + move, in ms. */
  duration: 800,
  /** Flip the stagger order: animate from the edges inward to the origin. */
  staggerInvert: false,
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
  /** Total stagger spread between first and last tile, in ms. */
  stagger?: number;
  /** Duration of a single tile's animation, in ms. */
  duration?: number;
  /** Animate from the edges inward to the origin instead of origin outward. */
  staggerInvert?: boolean;
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
  stagger = DEFAULTS.stagger,
  duration = DEFAULTS.duration,
  staggerInvert = DEFAULTS.staggerInvert,
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

    // elapsed === null  → fully settled (final) frame
    // elapsed is ms      → animated frame at that time since start
    const draw = (elapsed: number | null) => {
      const dpr = window.devicePixelRatio || 1;
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
      const tileW = w / cols;
      const rows = Math.max(1, Math.round(h / tileW));
      const tileH = h / rows;

      // "cover" mapping: figure out the region of the source image that fills
      // the canvas without distortion, then slice that region into the grid.
      const scale = Math.max(w / img.width, h / img.height);
      const visibleW = w / scale; // visible image region, in image pixels
      const visibleH = h / scale;
      const srcOffX = (img.width - visibleW) / 2;
      const srcOffY = (img.height - visibleH) / 2;
      const srcTileW = visibleW / cols;
      const srcTileH = visibleH / rows;

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
          const intensity = falloff(dist, falloffCurve, falloffPower, invertFalloff);
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
          const alpha = prog;

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

          // Scale the displacement + rotation by progress so the image starts
          // undistorted (prog 0) and settles into its full offset (prog 1).
          ox *= prog;
          oy *= prog;

          const rot =
            rotationAmount * DEG * intensity * prog * (Math.cos(angle) >= 0 ? 1 : -1);

          // The tile (the "mask") stays put on the fixed grid. Distortion moves
          // the image *underneath* it, so we offset the SOURCE sample region,
          // not the destination rect.
          const destX = c * tileW;
          const destY = r * tileH;
          const destW = tileW - tileGap;
          const destH = tileH - tileGap;

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
    stagger,
    duration,
    staggerInvert,
  ]);

  return (
    <div ref={wrapRef} className={className} data-tile-distort>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default TileDistort;
