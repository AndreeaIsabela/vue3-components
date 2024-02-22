import { as as openBlock, ay as createBlock, az as withCtx, av as renderSlot, aB as Transition, ax as resolveComponent, aA as createVNode, au as createBaseVNode, aC as withDirectives, aD as vShow, aE as ref } from "./vendor-cb2674a4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, {
    appear: $props.immediate,
    mode: $setup.props.mode,
    name: $setup.props.name,
    onEnter: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("enter")),
    onLeave: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("leave"))
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
    /* FORWARDED */
  }, 8, ["appear", "mode", "name"]);
}
const CustomTransition_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "CustomTransition",
  props: {
    immediate: {
      type: Boolean,
      required: false,
      default: false
    },
    mode: {
      type: String,
      required: false,
      default: "fade"
    },
    name: {
      type: String,
      required: false,
      default: "fade",
      validator(value, props) {
        return ["fade", "slide-x", "slide-y", "bounce"].includes(value);
      }
    }
  },
  emits: ["enter", "leave"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/CustomTransition.vue";
const CustomTransition = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/CustomTransition.vue"]]);
const _hoisted_1 = { id: "transition" };
const _hoisted_2 = { class: "square" };
const _hoisted_3 = {
  class: "row",
  id: "transition"
};
const _hoisted_4 = { class: "square" };
const _hoisted_5 = {
  class: "row",
  id: "transition"
};
const _hoisted_6 = { class: "square" };
const _hoisted_7 = {
  class: "row",
  id: "transition"
};
const _hoisted_8 = { class: "square" };
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_variant = resolveComponent("variant");
  const _component_story = resolveComponent("story");
  return openBlock(), createBlock(_component_story, { title: "Transition" }, {
    default: withCtx(() => [
      createVNode(_component_variant, { title: "Fade" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_1, [
            createBaseVNode("button", {
              onClick: _cache[0] || (_cache[0] = ($event) => $setup.changeTransition("fade"))
            }, "Fade"),
            createVNode($setup["CustomTransition"], { name: "fade" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode(
                  "div",
                  _hoisted_2,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $setup.show]
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Slide-x" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("button", {
              onClick: _cache[1] || (_cache[1] = ($event) => $setup.changeTransition("slide-x"))
            }, "Slide-x"),
            createVNode($setup["CustomTransition"], { name: "slide-x" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode(
                  "div",
                  _hoisted_4,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $setup.show]
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Slide-y" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_5, [
            createBaseVNode("button", {
              onClick: _cache[2] || (_cache[2] = ($event) => $setup.changeTransition("slide-y"))
            }, "Slide-y"),
            createVNode($setup["CustomTransition"], { name: "slide-y" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode(
                  "div",
                  _hoisted_6,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $setup.show]
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Bounce" }, {
        default: withCtx(() => [
          createBaseVNode("div", _hoisted_7, [
            createBaseVNode("button", {
              onClick: _cache[3] || (_cache[3] = ($event) => $setup.changeTransition("bounce"))
            }, "Bounce"),
            createVNode($setup["CustomTransition"], { name: "bounce" }, {
              default: withCtx(() => [
                withDirectives(createBaseVNode(
                  "div",
                  _hoisted_8,
                  null,
                  512
                  /* NEED_PATCH */
                ), [
                  [vShow, $setup.show]
                ])
              ]),
              _: 1
              /* STABLE */
            })
          ])
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const CustomTransition_story_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "CustomTransition.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const buttons = ["fade", "slide-x", "slide-y", "bounce"];
    const show = ref(true);
    const currentTransition = ref("fade");
    const changeTransition = (newTransition) => {
      if (newTransition !== currentTransition.value) {
        currentTransition.value = newTransition;
      }
      show.value = !show.value;
    };
    const __returned__ = { buttons, show, currentTransition, changeTransition, ref, CustomTransition };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/CustomTransition.story.vue";
const CustomTransition_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/CustomTransition.story.vue"]]);
export {
  CustomTransition_story as default
};
