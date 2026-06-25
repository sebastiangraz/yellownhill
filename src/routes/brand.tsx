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
import pastelscrapers from "/pastelscrapers.jpg";
import skyscraper from "/skyscraper.jpg";
import building from "/building.jpg";
import buildingAlt from "/building-alt.jpg";
import cloud from "/cloud.jpg";

export const Route = createFileRoute("/brand")({
  component: RouteComponent,
});

/** Where the downloadable asset bundle lives. Drop the zip in /public. */
const ASSETS_ZIP = "/yellown-hill-brand-assets.zip";

const COLORS = [
  { name: "Paper", hex: "#dfdfdc" },
  { name: "Ink", hex: "#000000" },
];

const TYPEFACES = [
  {
    name: "Affairs",
    role: "Serif · Headlines & body",
    family: "var(--font-serif)",
    style: undefined as React.CSSProperties | undefined,
  },
  {
    name: "Inter",
    role: "Sans · UI, labels & forms",
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
  borderColor: string;
  animate: boolean;
  animationFade: boolean;
  staggerInvert: boolean;
  stagger: number;
  duration: number;
  animationRange: number;
};

const INITIAL_CONFIG: Config = {
  gridCols: 24,
  tileGap: 1,
  distortionAmount: 64,
  originX: 0.5,
  originY: 0.5,
  falloffCurve: "ease-in",
  falloffPower: 2.4,
  invertFalloff: false,
  distortionMode: "scatter",
  rotationAmount: 4,
  seed: 1337,
  srcBackdrop: false,
  borderColor: "",
  animate: false,
  animationFade: false,
  staggerInvert: false,
  stagger: 700,
  duration: 800,
  animationRange: 1,
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

/** Bundled sample images offered as one-click presets in the generator. */
const PRESETS: { label: string; src: string }[] = [
  { label: "Towers", src: pastelscrapers },
  { label: "Skyscraper", src: skyscraper },
  { label: "Brick", src: building },
  { label: "Curves", src: buildingAlt },
  { label: "Clouds", src: cloud },
  { label: "Birds", src: bird },
  { label: "Sky", src: sky },
];

function RouteComponent() {
  // Preload the first sample so the generator is always visible on load.
  const [src, setSrc] = React.useState<string>(PRESETS[0].src);
  const [config, setConfig] = React.useState<Config>(INITIAL_CONFIG);

  const set = <K extends keyof Config>(key: K, value: Config[K]) =>
    setConfig((c) => ({ ...c, [key]: value }));

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
    <div className={styles.page}>
      {/* Intro */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Brand</span>
            <h1>Yellown Hill™ brand elements.</h1>
            <p className="secondary">
              The core building blocks of the identity — logotype, colors,
              typefaces, and the generative tile system. Download the full asset
              package below.
            </p>
          </div>
          <a className="badge" href={ASSETS_ZIP} download>
            Download brand assets (.zip) →
          </a>
        </div>
      </section>

      {/* Logotype */}
      <section className="bleed">
        <div className={`startend ${styles.section} fade-parallax`}>
          <div className={styles.sectionHead}>
            <span className="badge">Logotype</span>
            <p className="secondary">
              The wordmark is the primary lockup. The mark may be used on its
              own where space is constrained. Maintain clear space and use only
              the approved colors.
            </p>
          </div>

          <div className={styles.logoStage}>
            <div className={styles.logoFrame} data-variant="wordmark">
              <Logo />
            </div>
            <div className={styles.logoRow}>
              <div className={styles.logoFrame} data-variant="inverse">
                <Logo />
              </div>
              <div className={styles.logoFrame} data-variant="mark">
                <Logo.Mark />
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
            <p className="secondary">
              Two colors carry the identity: a warm paper and a pure ink.
            </p>
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
            <p className="secondary">Two typefaces pair across the identity.</p>
          </div>

          <div className={styles.typeList}>
            {TYPEFACES.map((t) => (
              <div
                key={t.name}
                className={styles.typeSpecimen}
                style={{ fontFamily: t.family, ...t.style }}
              >
                <div className={styles.typeName}>
                  <span className="badge">{t.name}</span>
                  <span className="badge secondary">{t.role}</span>
                </div>
                <div className={styles.typeSample}>
                  Strategic capital relationships across borders.
                </div>
                <div className={styles.typeGlyphs}>
                  AaBbCcDdEe 0123456789 &amp; ?!
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
            <span className="badge">Generative · Tile System</span>
            <p className="secondary">
              Source imagery is sliced into a grid; each tile drifts from its
              home position to create the signature distortion. Two prerendered
              examples below, plus a live generator to try your own image.
            </p>
          </div>

          <div className={styles.examples}>
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
                  borderColor="hsla(0, 0%, 0%, 0.2)"
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
          </div>

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
                <TileDistort src={src} {...config} />
              </div>

              <div className={styles.controls}>
                {SLIDERS.map((s) => (
                  <Slider
                    key={s.key}
                    def={s}
                    value={config[s.key] as number}
                    onChange={(v) => set(s.key, v as Config[typeof s.key])}
                  />
                ))}

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
                </label>

                <label className={styles.control}>
                  <span className="badge">
                    Grout color {config.borderColor ? "" : "(off)"}
                  </span>
                  <input
                    type="color"
                    value={config.borderColor || "#000000"}
                    onChange={(e) => set("borderColor", e.target.value)}
                  />
                </label>

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

                <button
                  type="button"
                  className={styles.reset}
                  onClick={() => setConfig(INITIAL_CONFIG)}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
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
