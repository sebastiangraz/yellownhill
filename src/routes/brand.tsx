import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  TileDistort,
  type FalloffCurve,
  type DistortionMode,
} from "~/components/TileDistort";
import { Logo } from "~/components/Logo/Logo";
import styles from "./brand.module.css";
import bird from "/bird.png";
import sky from "/sky.png";
import skyscraper from "/skyscraper.jpg";
import building from "/building.jpg";
import birdclouds from "/birdref2.png";
import buildingAlt from "/building-alt.jpg";
import cloud from "/cloud.jpg";
import mtn from "/mtn4.png";

export const Route = createFileRoute("/brand")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://yellownhill.com/brand" }],
    meta: [
      { title: "Brand · Yellown Hill" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: RouteComponent,
});

/** Where the downloadable asset bundle lives. Drop the zip in /public. */
const ASSETS_ZIP = "/logotypes.zip";

const COLORS = [
  { name: "Paper", hex: "#dfdfdc" },
  { name: "Ink", hex: "#000000" },
];

const TYPEFACES = [
  {
    name: "Affairs",
    role: "Headlines & body",
    family: "var(--font-serif)",
    style: undefined as React.CSSProperties | undefined,
  },
  {
    name: "Inter",
    role: "UI, labels & forms",
    family: "var(--font-sans)",
    style: { fontVariationSettings: '"opsz" 1' } as React.CSSProperties,
  },
];

/* ------------------------------------------------------------------------- */
/*  Live generator controls — every TileDistort prop, exposed as an input.    */
/* ------------------------------------------------------------------------- */

type Config = {
  gridCols: number;
  tileGap: number;
  distortionAmount: number;
  originX: number;
  originY: number;
  falloffCurve: FalloffCurve;
  falloffPower: number;
  invertFalloff: boolean;
  distortionMode: DistortionMode;
  rotationAmount: number;
  seed: number;
  srcBackdrop: boolean;
  backdropBlur: number;
  animate: boolean;
  animationFade: boolean;
  staggerInvert: boolean;
  stagger: number;
  duration: number;
  animationRange: number;
};

const INITIAL_CONFIG: Config = {
  gridCols: 18,
  tileGap: 0.5,
  distortionAmount: 50,
  originX: 0.5,
  originY: 0.5,
  falloffCurve: "ease-out",
  falloffPower: 0.6,
  invertFalloff: false,
  distortionMode: "scatter",
  rotationAmount: 0,
  seed: 11,
  srcBackdrop: true,
  backdropBlur: 12,
  animate: true,
  animationFade: false,
  staggerInvert: true,
  stagger: 400,
  duration: 1000,
  animationRange: 0.3,
};

type SliderDef = {
  key: keyof Config;
  label: string;
  min: number;
  max: number;
  step: number;
};

const SLIDERS: SliderDef[] = [
  { key: "gridCols", label: "Grid columns", min: 2, max: 48, step: 1 },
  { key: "tileGap", label: "Tile gap", min: 0, max: 8, step: 0.5 },
  { key: "distortionAmount", label: "Distortion", min: 0, max: 200, step: 1 },
  { key: "backdropBlur", label: "Backdrop blur", min: 0, max: 40, step: 0.5 },
  { key: "originX", label: "Origin X", min: 0, max: 1, step: 0.01 },
  { key: "originY", label: "Origin Y", min: 0, max: 1, step: 0.01 },
  { key: "falloffPower", label: "Falloff power", min: 0.1, max: 6, step: 0.1 },
  { key: "rotationAmount", label: "Rotation", min: 0, max: 360, step: 1 },
  { key: "seed", label: "Seed", min: 0, max: 9999, step: 1 },
];

const ANIM_SLIDERS: SliderDef[] = [
  { key: "stagger", label: "Stagger (ms)", min: 0, max: 3000, step: 50 },
  { key: "duration", label: "Duration (ms)", min: 100, max: 3000, step: 50 },
  { key: "animationRange", label: "Anim. range", min: 0, max: 1, step: 0.01 },
];

const TOGGLES: { key: keyof Config; label: string }[] = [
  { key: "invertFalloff", label: "Invert falloff" },
  { key: "srcBackdrop", label: "Source backdrop" },
  { key: "animate", label: "Animate" },
  { key: "animationFade", label: "Animation fade" },
  { key: "staggerInvert", label: "Stagger invert" },
];

const FALLOFF_CURVES: FalloffCurve[] = [
  "linear",
  "ease-in",
  "ease-out",
  "smoothstep",
  "constant",
];

const DISTORTION_MODES: DistortionMode[] = [
  "scatter",
  "radial",
  "vertical",
  "horizontal",
];

/** Compose a "#rrggbb" hex + 0..1 alpha into an rgba() string the canvas can
 *  use, so the grout color can carry an alpha channel the native picker can't. */
function toRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

/** Bundled sample images offered as one-click presets in the generator. */
const PRESETS: { label: string; src: string }[] = [
  { label: "Skyscraper", src: skyscraper },
  { label: "Birdclouds", src: birdclouds },
  { label: "Brick", src: building },
  { label: "Curves", src: buildingAlt },
  { label: "Clouds", src: cloud },
  { label: "Birds", src: bird },
  { label: "Sky", src: sky },
  { label: "Mountain", src: mtn },
];

function RouteComponent() {
  // Preload the first sample so the generator is always visible on load.
  const [src, setSrc] = React.useState<string>(PRESETS[2].src);
  const [config, setConfig] = React.useState<Config>(INITIAL_CONFIG);
  // Grout color is managed separately so it can carry an alpha channel; an
  // alpha of 0 means "off" (empty groutColor → no grout fill).
  const [groutHex, setGroutHex] = React.useState("#000000");
  const [groutAlpha, setGroutAlpha] = React.useState(0.2);
  const groutColor = groutAlpha > 0 ? toRgba(groutHex, groutAlpha) : "";

  const set = <K extends keyof Config>(key: K, value: Config[K]) =>
    setConfig((c) => ({ ...c, [key]: value }));

  const reset = () => {
    setConfig(INITIAL_CONFIG);
    setGroutHex("#000000");
    setGroutAlpha(0.2);
  };

  // Revoke object URLs when they change / unmount to avoid leaks.
  React.useEffect(() => {
    return () => {
      if (src?.startsWith("blob:")) URL.revokeObjectURL(src);
    };
  }, [src]);

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setSrc(URL.createObjectURL(file));
  };

  return (
    <>
      {/* Intro */}
      <section className={`bleed ${styles.firstSection}`}>
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <h1>Brand</h1>
            <p className="secondary">
              The core building blocks of Yellown Hill.
            </p>
            <button onClick={() => window.open(ASSETS_ZIP, "_blank")}>
              Logotypes<span className="secondary">.zip</span>
            </button>
          </div>
        </div>
      </section>

      {/* Logotype */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Logotype</span>
          </div>

          <div className={styles.logoStage}>
            <div className={styles.logoFrame} data-variant="wordmark">
              <Logo />
            </div>
            <div className={styles.logoRow}>
              <div className={styles.logoFrame} data-variant="inverse">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Color</span>
          </div>

          <div className={styles.swatches}>
            {COLORS.map((c) => (
              <div key={c.hex} className={styles.swatch}>
                <div
                  className={styles.swatchChip}
                  style={{ background: c.hex }}
                />
                <div className={`${styles.swatchMeta} small`}>
                  <span>{c.name}</span>
                  <span className="secondary">{c.hex.toUpperCase()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Typography</span>
          </div>

          <div className={styles.typeList}>
            {TYPEFACES.map((t) => (
              <div
                key={t.name}
                className={styles.typeSpecimen}
                style={{ fontFamily: t.family, ...t.style }}
              >
                <h1>{t.name}</h1>
                <div className={styles.typeSample}>
                  Strategic capital relationships across borders.
                </div>
                <div className={styles.typeGlyphs}>AaBbCcDdEe 0123456789</div>{" "}
                <div className={styles.typeName}>
                  <span className="badge secondary">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tile generator */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Generative Tile</span>
          </div>

          {/* <div className={styles.examples}>
            <div className={styles.example}>
              <div className={styles.exampleTile}>
                <TileDistort
                  src={bird}
                  gridCols={18}
                  distortionAmount={50}
                  originX={0}
                  originY={0}
                  falloffCurve="ease-out"
                  falloffPower={0.4}
                  tileGap={0.5}
                  seed={11}
                  rotationAmount={360}
                  distortionMode="scatter"
                  srcBackdrop
                  groutColor="hsla(0, 0%, 0%, 0.2)"
                />
              </div>
              <span className="badge secondary">Example — scatter</span>
            </div>

            <div className={styles.example}>
              <div className={styles.exampleTile}>
                <TileDistort
                  src={sky}
                  gridCols={14}
                  distortionAmount={40}
                  originX={1}
                  originY={0.5}
                  falloffCurve="ease-in"
                  falloffPower={2.4}
                  tileGap={1}
                  seed={7}
                  rotationAmount={0}
                  distortionMode="radial"
                  srcBackdrop
                />
              </div>
              <span className="badge secondary">Example — radial</span>
            </div>
          </div> */}

          <div className={styles.generator}>
            <div className={styles.picker}>
              {PRESETS.map((p) => (
                <button
                  key={p.src}
                  type="button"
                  className={styles.thumb}
                  data-active={src === p.src}
                  onClick={() => setSrc(p.src)}
                  title={p.label}
                  aria-label={`Use ${p.label} image`}
                  style={{ backgroundImage: `url(${p.src})` }}
                />
              ))}
              <label
                className={`${styles.thumb} ${styles.thumbUpload}`}
                data-active={src.startsWith("blob:")}
                title="Upload a custom image"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={onFile}
                  style={{ display: "none" }}
                />
                +
              </label>
            </div>

            <div className={styles.generatorBody}>
              <div className={styles.generatorTile}>
                <TileDistort src={src} {...config} groutColor={groutColor} />
              </div>

              <div className={styles.controls}>
                {SLIDERS.map((s) => (
                  <Slider
                    key={s.key}
                    def={s}
                    value={config[s.key] as number}
                    onChange={(v) => set(s.key, v as Config[typeof s.key])}
                  />
                ))}{" "}
                {config.animate
                  ? ANIM_SLIDERS.map((s) => (
                      <Slider
                        key={s.key}
                        def={s}
                        value={config[s.key] as number}
                        onChange={(v) => set(s.key, v as Config[typeof s.key])}
                      />
                    ))
                  : null}
                <label className={styles.control}>
                  <span className="badge">Falloff curve</span>
                  <select
                    value={config.falloffCurve}
                    onChange={(e) =>
                      set("falloffCurve", e.target.value as FalloffCurve)
                    }
                  >
                    {FALLOFF_CURVES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className={styles.control}>
                  <span className="badge">Distortion mode</span>
                  <select
                    value={config.distortionMode}
                    onChange={(e) =>
                      set("distortionMode", e.target.value as DistortionMode)
                    }
                  >
                    {DISTORTION_MODES.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>{" "}
                <div className={`${styles.control} ${styles.grout}`}>
                  <span className="badge">
                    Grout color
                    <span className={styles.controlValue}>
                      {groutColor || "off"}
                    </span>
                  </span>
                  <div className={styles.groutRow}>
                    <input
                      type="color"
                      value={groutHex}
                      onChange={(e) => setGroutHex(e.target.value)}
                      aria-label="Grout color"
                    />
                    <input
                      type="range"
                      min={0}
                      max={1}
                      step={0.01}
                      value={groutAlpha}
                      onChange={(e) => setGroutAlpha(Number(e.target.value))}
                      aria-label="Grout opacity"
                    />
                  </div>
                </div>
                <div className={styles.toggles}>
                  {TOGGLES.map((t) => (
                    <label key={t.key} className={`badge ${styles.toggle}`}>
                      <input
                        type="checkbox"
                        checked={config[t.key] as boolean}
                        onChange={(e) =>
                          set(t.key, e.target.checked as Config[typeof t.key])
                        }
                      />
                      {t.label}
                    </label>
                  ))}
                </div>
                <button type="button" className={styles.reset} onClick={reset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Slider({
  def,
  value,
  onChange,
}: {
  def: SliderDef;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <label className={styles.control}>
      <span className="badge">
        {def.label}
        <span className={styles.controlValue}>{value}</span>
      </span>
      <input
        type="range"
        min={def.min}
        max={def.max}
        step={def.step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}
