import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 class="${"mt-8 w-full text-center text-5xl"}">Welcome to Inventory Management Tool</h1>
<h2 class="${"mt-2 w-full text-center text-3xl"}">Track your stores inventory</h2>`;
});
export {
  Page as default
};
