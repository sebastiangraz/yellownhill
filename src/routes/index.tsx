import { createFileRoute } from "@tanstack/react-router";
import TileDistort from "~/components/TileDistort";
import cloud from "../../public/cloud.jpg";
import tester from "../../public/tester.png";
import sky from "../../public/sky.png";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* Hero */}
      <div className="hero">
        <TileDistort
          src={cloud}
          className="tile"
          gridCols={14}
          distortionAmount={120}
          originX={0}
          originY={0}
          falloffCurve="ease-out"
          falloffPower={0.4}
          tileGap={1}
          seed={2}
        />
        <div className="fade-starting">
          <h1
            className="hero-heading fade-parallax"
            style={{ "--fade-inset": "10%" } as React.CSSProperties}
          >
            Strategic Capital Relationships Across Borders.
          </h1>{" "}
        </div>
        <p
          className="hero-subtitle small fade-parallax"
          style={{ "--fade-inset": "20%" } as React.CSSProperties}
        >
          Focused on infrastructure, energy, real assets, and long-term
          institutional relationships.
        </p>
      </div>
      <section className="fade-parallax">
        <div className="startend gap-y-2 center px-4 grid">
          <span className="badge">Who We Are</span>
          <h2 className="max-width-prose">
            Yellown Hill™ is a New York-based strategic capital platform focused
            on infrastructure, energy, real assets, and cross-border capital
            relationships.
          </h2>
          <p className="max-width-prose">
            The platform works with investors, corporations, financial
            institutions, family offices, entrepreneurs, and business owners,
            supporting long-term relationships and strategic initiatives across
            global markets.
          </p>
          <hr />
          <span className="badge">Ray Gelbberg · Founder </span>
          <p className="max-width-prose">
            Based in New York, Ray works across strategic relationships
            involving investors, corporations, financial institutions, and
            family offices throughout North America and the Asia-Pacific region.
          </p>
          <p className="max-width-prose">
            His work is focused on long-term institutional relationships,
            cross-border opportunities, and the intersection of real assets,
            infrastructure, and strategic capital.
          </p>
        </div>
      </section>

      {/* Our Approach */}
      <section className="fade-parallax">
        <div className="startend gap-y-2 center px-4 grid">
          <span className="badge">Our Approach</span>
          <p className="max-width-prose">
            Yellown Hill believes that enduring opportunities are built through
            long-term relationships rather than purely transactional engagement.
          </p>
          <p className="max-width-prose">
            The platform supports strategic initiatives that benefit from
            international perspective, trusted networks, and cross-border
            coordination.
          </p>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="fade-parallax">
        <div className="startend gap-y-2 center px-4 grid">
          <div className="rows" data-gap="2">
            <span className="badge">Areas of Focus</span>
            <div
              className="columns rows small"
              data-gap="1"
              style={{ "--columns": 4 } as React.CSSProperties}
            >
              <p>
                <span className="emphasis">Infrastructure</span>, supporting
                strategic relationships and opportunities across transportation,
                logistics, utilities, and digital infrastructure.
              </p>
              <p>
                <span className="emphasis">Energy</span>, facilitating
                cross-border relationships and strategic initiatives across
                conventional and emerging energy sectors.
              </p>
              <p>
                <span className="emphasis">Real assets</span>, connecting
                long-term capital with selected opportunities across global
                markets.
              </p>
              <p>
                <span className="emphasis">Strategy</span>, building and
                maintaining institutional capital relationships between
                investors, corporations, financial institutions, and family
                offices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="fade-parallax">
        <div className="startend gap-y-2 center px-4 grid">
          <h2>Request a Conversation</h2>
          <p className="max-width-prose">
            Ray Gelbberg · Founder, New York, NY 10022
          </p>
          <form
            className="contact-form max-width-prose"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows={4}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="fade-parallax">
        <div className="startend gap-y-1 px-3 grid  center small secondary">
          <span className="badge">Disclaimer</span>
          <p>Yellown Hill is a strategic capital platform.</p>
          <p>
            The information contained on this website is provided for general
            informational purposes only and does not constitute an offer to sell
            or a solicitation to buy any security, investment product, or
            advisory service.
          </p>
          <p>
            Nothing contained herein should be construed as legal, tax,
            financial, or investment advice.
          </p>
        </div>
      </section>
    </>
  );
}
