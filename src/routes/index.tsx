import { createFileRoute } from "@tanstack/react-router";
import { CityParallax } from "~/components/CityParallax";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main>
        <section>
          <p className="tag">Yellownhill</p>
          <h1>A city drawn in two-point perspective.</h1>
          <p>
            Every line is a brush stroke under a custom projection. Scroll and
            the vanishing points lift the skyline from a worm's-eye view toward
            eye-level.
          </p>
        </section>{" "}
        <CityParallax />
        <section>
          <h2>Generative</h2>
          <p>
            The whole skyline is a pure function of a seed — reproducible,
            tweakable, and rendered live in WebGL.
          </p>
        </section>
        <section>
          <h2>Hand-drawn ink</h2>
          <p>
            Overlapping strokes multiply like real ink on a transparent canvas,
            so the page shows through and crossings darken.
          </p>
        </section>
        <section>
          <h2>Keep scrolling</h2>
          <p>The vanishing points have come to rest at eye level.</p>
        </section>
      </main>
    </>
  );
}
