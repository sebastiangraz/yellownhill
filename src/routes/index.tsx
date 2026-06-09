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
        <h2>Yellown Hill™ Strategic Capital Relationships Across Borders.</h2>
        <p>
          Focused on infrastructure, energy, real assets, and long-term
          institutional relationships.
        </p>
      </section>
    </>
  );
}
