/// <reference types="vite/client" />
import * as React from "react";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
  useRouterState,
} from "@tanstack/react-router";

import globalCss from "~/styles/global.css?url";
import { Logo } from "~/components/Logo/Logo";

const SITE_URL = "https://yellownhill.com";
const SITE_NAME = "Yellown Hill";
const DEFAULT_TITLE = "Yellown Hill · Strategic Capital Platform";
const DEFAULT_DESCRIPTION =
  "Yellown Hill is a New York-based strategic capital platform focused on infrastructure, energy, real assets, and cross-border capital relationships.";
const OG_IMAGE = `${SITE_URL}/og.png`;

export const Route = createRootRoute({
  head: () => ({
    links: [
      { rel: "stylesheet", href: globalCss },
      { rel: "icon", href: "/favicon.png", sizes: "96x96", type: "image/png" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "shortcuticon", href: "/favicon.ico", sizes: "any" },
      { rel: "apple-touch-icon", href: "/favicon.ico" },
    ],
    meta: [
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0",
      },
      { title: DEFAULT_TITLE },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#dfdfdc" },
      // Open Graph defaults (routes override title/description/url)
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:title", content: DEFAULT_TITLE },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      // Twitter Card defaults
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: DEFAULT_TITLE },
      { name: "twitter:description", content: DEFAULT_DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const isHome = useRouterState({
    select: (s) => s.location.pathname === "/",
  });

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <header className="container navigation">
          <nav>
            {isHome ? (
              <Logo />
            ) : (
              <Link to="/" aria-label="Yellown Hill · home">
                <Logo />
              </Link>
            )}
            <span className="badge">New York, NY 10022</span>
          </nav>
        </header>

        <main className="container">{children}</main>
        <footer className="container"></footer>
        <Scripts />
      </body>
    </html>
  );
}
