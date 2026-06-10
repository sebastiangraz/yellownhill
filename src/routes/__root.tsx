/// <reference types="vite/client" />
import * as React from "react";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    links: [{ rel: "stylesheet", href: appCss }],
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
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="container navigation">
          <nav>
            <Logo />
            <p>New York, NY 10022</p>
          </nav>
        </div>

        <main className="container">{children}</main>
        {/* <TanStackRouterDevtools position="bottom-right" /> */}
        <Scripts />
      </body>
    </html>
  );
}

const Logo = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 182 12">
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M70.818 0q1.633 0 3.05.4 1.434.384 2.5 1.15a5.5 5.5 0 0 1 1.667 1.883q.6 1.117.6 2.567t-.6 2.567a5.5 5.5 0 0 1-1.667 1.884q-1.066.766-2.5 1.166-1.417.383-3.05.383-1.65 0-3.067-.383-1.418-.4-2.5-1.166a5.5 5.5 0 0 1-1.667-1.884q-.6-1.117-.6-2.567t.6-2.567T65.25 1.55Q66.333.784 67.75.4q1.418-.4 3.068-.4m-.167 2.067a8 8 0 0 0-2.017.25 5.4 5.4 0 0 0-1.683.75 3.7 3.7 0 0 0-1.15 1.233q-.417.734-.416 1.7 0 .966.416 1.7.416.733 1.15 1.234a5.4 5.4 0 0 0 1.683.75 8 8 0 0 0 2.017.25h.334q1.066 0 2.016-.25a5.2 5.2 0 0 0 1.666-.75 3.7 3.7 0 0 0 1.15-1.234q.418-.734.418-1.7t-.417-1.7a3.7 3.7 0 0 0-1.15-1.233A5.2 5.2 0 0 0 73 2.317a8 8 0 0 0-2.016-.25z"
        clip-rule="evenodd"
      />
      <path
        fill="#000"
        d="M6.997 4.664 10.884.167h3.066L8.167 6.783v5.05H5.8v-5.05L0 .167h3.15zM29.51 2.233h-9.817V4.8h8.817v2.067h-8.817v2.9h9.984v2.066H17.325V.167H29.51zM36.122 9.767h9.334v2.066h-11.7V.167h2.366zM51.43 9.767h9.333v2.066h-11.7V.167h2.366zM86.585 8.97 89.693.166h2.916l3.168 8.889L98.66.166h2.467l-4 11.667h-2.8L91.12 2.89l-3.178 8.943h-2.817l-4-11.666h2.517zM115.202 9.064V.167h2.368v11.666h-2.968l-7.65-8.898v8.898h-2.367V.167h2.967zM131.332 4.917h8.6V.167h2.366v11.666h-2.366v-4.85h-8.6v4.85h-2.368V.167h2.368zM149.47 11.833h-2.366V.167h2.366zM156.639 9.767h9.334v2.066h-11.701V.167h2.367zM171.945 9.767h9.334v2.066h-11.701V.167h2.367z"
      />
      <path
        fill="#000"
        fill-rule="evenodd"
        d="m180.229.92.183.007q.258.022.408.105.2.112.201.4 0 .2-.144.32a.4.4 0 0 1-.148.073.5.5 0 0 1 .131.055q.168.105.168.4v.4h-.591v-.4q0-.168-.088-.208a.4.4 0 0 0-.094-.03l-.122-.01h-.08v.648h-.592V.92zm-.176.72h.143q.13 0 .185-.04t.056-.12q0-.12-.135-.15l-.106-.01h-.143z"
        clip-rule="evenodd"
      />
      <path
        fill="#000"
        fill-rule="evenodd"
        d="M180.221 0q.504 0 .887.216.384.216.6.608.217.384.217.904v.232q0 .504-.217.904a1.6 1.6 0 0 1-.6.616 1.8 1.8 0 0 1-.887.216q-.497 0-.889-.216a1.63 1.63 0 0 1-.615-.616 1.9 1.9 0 0 1-.217-.904v-.232q0-.52.225-.904.223-.392.607-.608.392-.216.889-.216m0 .416q-.336 0-.617.144-.272.136-.44.432-.168.295-.168.76v.216q0 .448.168.744.168.288.44.432.28.135.617.136.336 0 .607-.136.28-.144.441-.432.16-.296.16-.744v-.216q0-.465-.16-.76a1 1 0 0 0-.441-.432 1.3 1.3 0 0 0-.607-.144"
        clip-rule="evenodd"
      />
    </svg>
  );
};
