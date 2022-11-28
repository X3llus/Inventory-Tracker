import { c as create_ssr_component } from "../../../../chunks/index.js";
import "../../../../chunks/firebase.js";
import "jsbarcode";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"m-8"}">${``}</div>`;
});
export {
  Page as default
};
