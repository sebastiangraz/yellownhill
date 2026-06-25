/// <reference types="vite/client" />
import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
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

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: globalCss }],
    meta: [
      { name: "description", content: "Yellown Hill" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
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
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="container navigation">
          <nav>
            {isHome ? (
              <Logo />
            ) : (
              <Link to="/" aria-label="Yellown Hill — home">
                <Logo />
              </Link>
            )}
            <span className="badge">New York, NY 10022</span>
          </nav>
        </div>

        <main className="container">{children}</main>
        <footer className="container"></footer>
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}
