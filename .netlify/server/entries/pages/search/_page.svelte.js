import { c as create_ssr_component, f as add_attribute, d as each, e as escape } from "../../../chunks/index.js";
import algoliasearch from "algoliasearch/lite.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const client = algoliasearch("1D4S5N8N5Z", "3ff9039d084598dd7904f0ebc792e808");
  client.initIndex("inventory");
  let _hits = [];
  let query = "";
  return `${$$result.head += `<!-- HEAD_svelte-gh6ivs_START -->${$$result.title = `<title>Search Products</title>`, ""}<!-- HEAD_svelte-gh6ivs_END -->`, ""}


<div class="${"flex justify-center my-4"}"><input class="${"bg-slate-200 rounded-md border-solid h-10 w-96 text-center"}" type="${"text"}"${add_attribute("value", query, 0)}></div>

<div><ul class="${"space-y-4 m-8"}">${each(_hits, (product) => {
    return `<li class="${"w-full hover:bg-slate-400 hover:cursor-pointer rounded-xl p-4"}"><h1 class="${"text-xl"}">${escape(product.title)}</h1>
				<h2 class="${"text-lg"}">${escape(product.brand)}</h2>
				<p>${escape(product.description)}</p>
            </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
