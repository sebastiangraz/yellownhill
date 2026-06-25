import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import TileDistort from "~/components/TileDistort";
import { Logo } from "~/components/Logo/Logo";
import styles from "./home.module.css";
import birdref2 from "/birdref2.png";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

type ContactStatus = "idle" | "submitting" | "success" | "error";

function RouteComponent() {
  const [status, setStatus] = useState<ContactStatus>("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>),
      });
      if (!res.ok) throw new Error(`Submission failed: ${res.status}`);
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

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
          src={birdref2}
          className={styles.tile}
          gridCols={18}
          distortionAmount={50}
          originX={0}
          originY={0}
          falloffCurve="ease-out"
          falloffPower={0.4}
          tileGap={0.5}
          seed={11}
          staggerInvert={true}
          rotationAmount={360}
          distortionMode="scatter"
          srcBackdrop={true}
          borderColor="hsla(0, 0%, 0%, 0.2)"
          // animate={true}
          // stagger={3000}
          // duration={6000}
          // animationRange={0.4}
          // animationFade={false}
        />
      </div>
      <section className="bleed ">
        <div className={`startend ${styles.whoWeAre}`}>
          <div className={styles.whoWeAreLabel}>
            <span className="badge">Who We Are</span>
          </div>
          <div className={`${styles.whoWeAreContent} fade-parallax`}>
            <h2>
              Yellown Hill™ is a New York-based strategic capital platform
              focused on infrastructure, energy, real assets, and cross-border
              capital relationships.
            </h2>
            <p>
              The platform works with investors, corporations, financial
              institutions, family offices, entrepreneurs, and business owners,
              supporting long-term relationships and strategic initiatives
              across global markets.
            </p>
          </div>

          <div className={styles.whoWeAreLabel}>
            <span className="badge">Founder</span>
          </div>
          <div className={`${styles.whoWeAreContent} fade-parallax`}>
            <p>
              Ray Gelbberg is based in New York, working across strategic
              relationships involving investors, corporations, financial
              institutions, and family offices throughout North America and the
              Asia-Pacific region.
            </p>
            <p>
              His work is focused on long-term institutional relationships,
              cross-border opportunities, and the intersection of real assets,
              infrastructure, and strategic capital.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bleed">
        <div className={`${styles.card} startend gap-y-2 fade-parallax`}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div data-span="2" className={styles.cardTitle}>
            <div className={styles.cardContent}>
              <h3>Our Approach</h3>
              <span className="badge">New York, NY&nbsp;10022</span>
            </div>
          </div>
          <div data-span="3" className={styles.cardParagraph}>
            <div className={styles.cardContent}>
              <p className={`small`}>
                Yellown Hill believes that enduring opportunities are built
                through long-term relationships rather than purely transactional
                engagement.
              </p>
              <p className={`small`}>
                The platform supports strategic initiatives that benefit from
                international perspective, trusted networks, and cross-border
                coordination.
              </p>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div data-span="3"></div>
          <div>
            <Logo.Mark className={styles.logoMark} />
          </div>
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="bleed fade-parallax">
        <div className="startend gap-y-2 center px-4 grid container-inline">
          <div className="rows" data-gap="2">
            <span className="badge">Areas of Focus</span>
            <div
              className="columns rows small"
              data-row-gap="2"
              data-column-gap="1"
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
        <div className="startend gap-y-2 center px-4 grid ">
          <span className="badge">Request a Conversation</span>
          <p className="max-width-prose">
            Ray Gelbberg · Founder, New York, NY 10022
          </p>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className={`${styles.contactForm} max-width-prose`}
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>
                Don’t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              aria-label="Email"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              aria-label="Message"
              rows={4}
              required
            />
            <button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send"}
            </button>
            {status === "success" && (
              <p role="status" className="small">
                Thank you — your message has been sent.
              </p>
            )}
            {status === "error" && (
              <p role="alert" className="small">
                Something went wrong. Please email{" "}
                <a href="mailto:ray@yellownhill.com">ray@yellownhill.com</a>{" "}
                directly.
              </p>
            )}
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
