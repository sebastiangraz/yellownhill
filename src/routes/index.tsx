import { createFileRoute } from "@tanstack/react-router";
import TileDistort from "~/components/TileDistort";
import styles from "./home.module.css";
import cloud from "/cloud.jpg";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* Hero */}
      <div className={styles.hero}>
        {" "}
        <div className={`${styles.heading} fade-parallax`}>
          <h1 style={{ "--fade-inset": "10%" } as React.CSSProperties}>
            Strategic capital relationships across borders.
          </h1>{" "}
        </div>
        <TileDistort
          src={cloud}
          className={styles.tile}
          gridCols={16}
          distortionAmount={92}
          originX={0}
          originY={0}
          falloffCurve="ease-out"
          falloffPower={0.4}
          tileGap={1}
          seed={2}
          animate={true}
          stagger={2000}
          duration={3000}
          staggerInvert={true}
          animationRange={0.4}
          distortionMode="scatter"
        />
      </div>
      <section className="fade-parallax bleed ">
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
      <section className="bleed">
        <div className={`${styles.card} startend gap-y-2 fade-parallax`}>
          {/* <span className="badge">Our Approach</span> */}
          {/* <p>
            Yellown Hill believes that enduring opportunities are built through
            long-term relationships rather than purely transactional engagement.
          </p>
          <p>
            The platform supports strategic initiatives that benefit from
            international perspective, trusted networks, and cross-border
            coordination.
          </p> */}
          <p style={{ gridColumn: "span 2", gridRow: "span 1" }}>small</p>
          <p>small</p>
          <p>small</p>
          <p>small</p>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div> <div></div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="bleed fade-parallax">
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
          <span className="badge">Request a Conversation</span>
          <p className="max-width-prose">
            Ray Gelbberg · Founder, New York, NY 10022
          </p>
          <form
            className={`${styles.contactForm} max-width-prose`}
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
      <section className="bleed fade-parallax">
        <div className="startend gap-y-1 px-3 grid center small secondary">
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
