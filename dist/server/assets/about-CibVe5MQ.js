import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/Counter.tsx
function Counter() {
	const [count, setCount] = useState(0);
	return /* @__PURE__ */ jsxs("button", {
		className: "increment",
		onClick: () => setCount(count + 1),
		type: "button",
		children: ["Clicks: ", count]
	});
}
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function RouteComponent() {
	return /* @__PURE__ */ jsxs("main", { children: [/* @__PURE__ */ jsx("h1", { children: "About" }), /* @__PURE__ */ jsx(Counter, {})] });
}
//#endregion
export { RouteComponent as component };
