import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { TileDistort } from "~/components/TileDistort";

export const Route = createFileRoute("/distort")({
  component: RouteComponent,
});

function RouteComponent() {
  const [src, setSrc] = React.useState<string | null>(null);

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
    <div className="fade-parallax">
      <div className="startend gap-y-2 center px-3 grid">
        <span className="badge">Generative · Tile Distortion</span>
        <p className="max-width-prose small secondary">
          Choose an image. It is sliced into a grid; each tile drifts from its
          home position. Art-direct the effect via the constants at the top of
          TileDistort.tsx.
        </p>

        <label className="badge" style={{ cursor: "pointer" }}>
          <input
            type="file"
            accept="image/*"
            onChange={onFile}
            style={{ display: "none" }}
          />
          {src ? "Choose another image →" : "Choose an image →"}
        </label>

        {src ? (
          <TileDistort
            src={src}
            className="bleed"
            // Animate in from the center outward.
            animate
            originX={0.5}
            originY={0.5}
            stagger={700}
            duration={800}
            // staggerInvert  // ← flip to animate edges → center
          />
        ) : null}
      </div>
    </div>
  );
}
