import { createFileRoute } from "@tanstack/react-router";
import { CityParallax } from "~/components/CityParallax";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <CityParallax />
      <section>
        <div className="startend gap-y-2 center px-4 grid">
          <h2>
            Yellown Hill™ Strategic Capital
            <br />
            Relationships Across Borders.
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
