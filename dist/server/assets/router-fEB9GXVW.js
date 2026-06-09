import "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
//#region src/styles/app.css?url
var app_default = "/assets/app-CsJJAHX4.css";
//#endregion
//#region src/routes/__root.tsx
var Route$2 = createRootRoute({
	head: () => ({ links: [{
		rel: "stylesheet",
		href: app_default
	}] }),
	component: RootComponent
});
function RootComponent() {
	return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx(Outlet, {}) });
}
function RootDocument({ children }) {
	return /* @__PURE__ */ jsxs("html", { children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [
		/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Link, {
			to: "/",
			children: "Index"
		}), /* @__PURE__ */ jsx(Link, {
			to: "/about",
			children: "About"
		})] }),
		children,
		/* @__PURE__ */ jsx(TanStackRouterDevtools, { position: "bottom-right" }),
		/* @__PURE__ */ jsx(Scripts, {})
	] })] });
}
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$1 = () => import("./about-CibVe5MQ.js");
var Route$1 = createFileRoute("/about")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter = () => import("./routes-BKAObcLV.js");
var Route = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
//#endregion
//#region src/routeTree.gen.ts
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$2
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	AboutRoute
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
function getRouter() {
	return createRouter({
		routeTree,
		defaultPreload: "intent",
		defaultErrorComponent: (err) => /* @__PURE__ */ jsx("p", { children: err.error.stack }),
		defaultNotFoundComponent: () => /* @__PURE__ */ jsx("p", { children: "not found" }),
		scrollRestoration: true
	});
}
//#endregion
export { getRouter };
