import { createFileRoute } from "@tanstack/react-router";
import { CityParallax } from "~/components/CityParallax";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="city-hero">
        <CityParallax />
        <h1 className="city-hero-heading">
          Strategic Capital Relationships Across Borders.
        </h1>
      </div>
      <section>
        <div className="startend gap-y-2 center px-4 grid">
          <h2 className="max-width-prose">
            Yellown Hill™ is a New York-based strategic capital platform focused
            on infrastructure, energy, real assets, and cross-border capital
            relationships.
          </h2>
          <p className="max-width-prose">
            Focused on infrastructure, energy, real assets, and long-term
            institutional relationships.
          </p>
          <button>Learn More</button>
        </div>
      </section>
      <section style={{ height: "70vh" }}>
        <div className="startend gap-y-2 center px-4 grid">
          <p>WIP</p>
        </div>
      </section>
    </>
  );
}
