import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [];
  {
    console.log(products);
  }
  return `${$$result.head += `<!-- HEAD_svelte-aehnld_START -->${$$result.title = `<title>All Products</title>`, ""}<!-- HEAD_svelte-aehnld_END -->`, ""}

<div><ul class="${"space-y-4 m-8"}">${products.length ? each(products, (product) => {
    return `<li class="${"w-full hover:bg-slate-400 hover:cursor-pointer rounded-xl p-4 flex"}"><img class="${"h-24 m-4"}"${add_attribute("src", product.thumbnail, 0)}${add_attribute("alt", product.title, 0)}>
				<div><h1 class="${"text-xl"}">${escape(product.title)}</h1>
					<h2 class="${"text-lg"}">${escape(product.brand)}</h2>
					<p>${escape(product.description)}</p>
					<p>$${escape(product.price)}</p></div>
            </li>`;
  }) : `Loading...`}</ul></div>`;
});
export {
  Page as default
};
