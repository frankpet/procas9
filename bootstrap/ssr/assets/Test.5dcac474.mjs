import { Head, Link } from "@inertiajs/inertia-vue3";
import { mergeProps, useSSRContext, resolveComponent, withCtx, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.43be4956.mjs";
const _sfc_main$1 = {
  props: {},
  components: {
    Head,
    Link
  },
  data() {
    return {
      show: false
    };
  },
  computed: {},
  watch: {},
  mounted() {
    this.show = true;
  },
  methods: {}
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen bg-pink-300 flex-col flex p-2 relative text-white" }, _attrs))}><div class="px-2 py-1 text-right flex flex-row justify-between items-center bg-pink-600"></div><div class="flex-grow flex bg-indigo-300">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/BaseLayout.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaseLayout = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const Test_vue_vue_type_style_index_0_scoped_989f4fa6_lang = "";
const _sfc_main = {
  components: {
    Link,
    Head
  },
  layout: BaseLayout
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Test pagina" }, null, _parent));
  _push(`<div class="text-blue-100 hover:text-indigo-200 bg-pink-400 flex justify-center h-full items-center w-full" data-v-989f4fa6><div data-v-989f4fa6><div class="flex test" data-v-989f4fa6></div><div class="test pl-4" data-v-989f4fa6>`);
  _push(ssrRenderComponent(_component_Link, {
    href: _ctx.route("tests")
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<img src="images/problue.png" data-v-989f4fa6${_scopeId}>`);
      } else {
        return [
          createVNode("img", { src: "images/problue.png" })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Test.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Test = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-989f4fa6"]]);
export {
  Test as default
};
