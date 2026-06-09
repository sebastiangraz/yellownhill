import { createFileRoute } from "@tanstack/react-router";
import { CityParallax } from "~/components/CityParallax";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <main>
        <CityParallax />
        <section>
          <h2>
            Yellown Hill™ is a strategic capital platform focused on
            infrastructure, energy, real assets, and cross-border capital
            relationships.
          </h2>
          <p>
            The platform is oriented toward long-term institutional
            relationships and strategic transactions across global markets.
          </p>
        </section>
      </main>
    </>
  );
}
