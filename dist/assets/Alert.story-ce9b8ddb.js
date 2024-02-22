import { as as openBlock, at as createElementBlock, au as createBaseVNode, av as renderSlot, aw as normalizeClass, ax as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode } from "./vendor-cb2674a4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _hoisted_1$1 = { class: "icon-placeholder" };
const _hoisted_2$1 = ["src"];
const _hoisted_3$1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Alert body",
  -1
  /* HOISTED */
);
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(
    "p",
    {
      class: normalizeClass(["alert text-left", "alert-" + $props.alertType])
    },
    [
      createBaseVNode("span", _hoisted_1$1, [
        createBaseVNode("img", {
          width: "36",
          height: "36",
          src: $props.imgPath
        }, null, 8, _hoisted_2$1)
      ]),
      renderSlot(_ctx.$slots, "body", {}, () => [
        _hoisted_3$1
      ])
    ],
    2
    /* CLASS */
  );
}
const Alert_vue_vue_type_style_index_0_lang = "";
const _sfc_main$1 = {
  __name: "Alert",
  props: {
    alertType: {
      type: String,
      required: true,
      default: "success",
      validator(value, props) {
        return ["success", "warning", "danger", "important"].includes(value);
      }
    },
    imgPath: {
      type: String,
      required: true,
      default: ""
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/Alert.vue";
const Alert = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Alert.vue"]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "This is a success alert.",
  -1
  /* HOISTED */
);
const _hoisted_2 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "This is a warning alert.",
  -1
  /* HOISTED */
);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "This is a danger alert.",
  -1
  /* HOISTED */
);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "This is an important alert.",
  -1
  /* HOISTED */
);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_variant = resolveComponent("variant");
  const _component_story = resolveComponent("story");
  return openBlock(), createBlock(_component_story, { title: "Alert" }, {
    default: withCtx(() => [
      createVNode(_component_variant, { title: "Success" }, {
        default: withCtx(() => [
          createVNode($setup["Alert"], {
            alertType: "success",
            imgPath: $setup.imgPath
          }, {
            body: withCtx(() => [
              _hoisted_1
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Warning" }, {
        default: withCtx(() => [
          createVNode($setup["Alert"], {
            alertType: "warning",
            imgPath: $setup.imgPath
          }, {
            body: withCtx(() => [
              _hoisted_2
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Danger" }, {
        default: withCtx(() => [
          createVNode($setup["Alert"], {
            alertType: "danger",
            imgPath: $setup.imgPath
          }, {
            body: withCtx(() => [
              _hoisted_3
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      }),
      createVNode(_component_variant, { title: "Important" }, {
        default: withCtx(() => [
          createVNode($setup["Alert"], {
            alertType: "important",
            imgPath: $setup.imgPath
          }, {
            body: withCtx(() => [
              _hoisted_4
            ]),
            _: 1
            /* STABLE */
          })
        ]),
        _: 1
        /* STABLE */
      })
    ]),
    _: 1
    /* STABLE */
  });
}
const imgPath = "./src/assets/logo.svg";
const _sfc_main = {
  __name: "Alert.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { imgPath, Alert };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/Alert.story.vue";
const Alert_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Alert.story.vue"]]);
export {
  Alert_story as default
};
