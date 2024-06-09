import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { d as _export_sfc } from "../entry-server.js";
import "vue-router";
import "element-plus";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>法律法规</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/law.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const law = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  law as default
};
