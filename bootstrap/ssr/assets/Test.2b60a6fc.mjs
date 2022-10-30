import { Link, Head } from "@inertiajs/inertia-vue3";
import { resolveComponent, withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const Test_vue_vue_type_style_index_0_scoped_1ca1eb0a_lang = "";
const _sfc_main = {
  components: {
    Link,
    Head
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Test pagina" }, null, _parent));
  _push(`<div class="text-blue-100 hover:text-indigo-200 bg-pink-400 flex justify-center h-screen items-center" data-v-1ca1eb0a><div class="flex test" data-v-1ca1eb0a>Hello world s ${ssrInterpolate(_ctx.getTest)}</div><div class="test pl-4" data-v-1ca1eb0a>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("home")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="images/problue.png" data-v-1ca1eb0a${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "images/problue.png" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-1ca1eb0a"]]);
export {
  Test as default
};
