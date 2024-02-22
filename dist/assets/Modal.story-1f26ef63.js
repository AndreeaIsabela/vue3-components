import { as as openBlock, ay as createBlock, az as withCtx, au as createBaseVNode, av as renderSlot, aB as Transition, aF as pushScopeId, aG as popScopeId, ax as resolveComponent, aH as toDisplayString, aC as withDirectives, aI as vModelText, aJ as createCommentVNode, aE as ref } from "./vendor-cb2674a4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _withScopeId = (n) => (pushScopeId("data-v-e6245f03"), n = n(), popScopeId(), n);
const _hoisted_1$1 = { class: "customModal-backdrop" };
const _hoisted_2 = {
  class: "customModal",
  role: "dialog",
  "aria-labelledby": "modalTitle",
  "aria-describedby": "modalDescription"
};
const _hoisted_3 = {
  class: "customModal-header",
  id: "modalTitle"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Title",
  -1
  /* HOISTED */
));
const _hoisted_5 = {
  class: "customModal-body",
  id: "modalDescription"
};
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Modal body",
  -1
  /* HOISTED */
));
const _hoisted_7 = { class: "customModal-footer" };
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "Footer",
  -1
  /* HOISTED */
));
function render$1(_ctx, _cache) {
  return openBlock(), createBlock(Transition, { name: "modal-fade" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$1, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("header", _hoisted_3, [
            createBaseVNode("button", {
              class: "btn-close",
              type: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close")),
              "aria-label": "Close modal"
            }, "X"),
            renderSlot(_ctx.$slots, "header", {}, () => [
              _hoisted_4
            ], true)
          ]),
          createBaseVNode("section", _hoisted_5, [
            renderSlot(_ctx.$slots, "body", {}, () => [
              _hoisted_6
            ], true)
          ]),
          createBaseVNode("footer", _hoisted_7, [
            renderSlot(_ctx.$slots, "footer", {}, () => [
              _hoisted_8
            ], true)
          ])
        ])
      ])
    ]),
    _: 3
    /* FORWARDED */
  });
}
const Modal_vue_vue_type_style_index_0_scoped_e6245f03_lang = "";
const _sfc_main$1 = {};
_sfc_main$1.__file = "src/Modal.vue";
const Modal = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__scopeId", "data-v-e6245f03"], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Modal.vue"]]);
const _hoisted_1 = /* @__PURE__ */ createBaseVNode(
  "span",
  null,
  "ADDITIONAL NOTES",
  -1
  /* HOISTED */
);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_story = resolveComponent("story");
  return openBlock(), createBlock(_component_story, { title: "Modal" }, {
    default: withCtx(() => [
      createBaseVNode("button", {
        class: "btn-green",
        id: "openModal",
        onClick: $setup.toggleModal
      }, "Open modal"),
      createBaseVNode(
        "h3",
        null,
        toDisplayString($setup.notes),
        1
        /* TEXT */
      ),
      $setup.isModalVisible ? (openBlock(), createBlock($setup["Modal"], {
        key: 0,
        onClose: $setup.toggleModal
      }, {
        header: withCtx(() => [
          _hoisted_1
        ]),
        body: withCtx(() => [
          withDirectives(createBaseVNode(
            "textarea",
            {
              id: "modalNotes",
              placeholder: "e.g: Tell us about the modal body",
              rows: "7",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.notes = $event)
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vModelText, $setup.notes]
          ])
        ]),
        footer: withCtx(() => [
          createBaseVNode("button", {
            class: "btn-green",
            type: "button",
            onClick: $setup.save,
            "aria-label": "Close modal"
          }, "SAVE")
        ]),
        _: 1
        /* STABLE */
      })) : createCommentVNode("v-if", true)
    ]),
    _: 1
    /* STABLE */
  });
}
const Modal_story_vue_vue_type_style_index_0_scooped_true_lang = "";
const _sfc_main = {
  __name: "Modal.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const isModalVisible = ref(false);
    const notes = ref("");
    const toggleModal = () => {
      isModalVisible.value = !isModalVisible.value;
    };
    const save = () => {
      toggleModal();
    };
    const __returned__ = { isModalVisible, notes, toggleModal, save, ref, Modal };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/Modal.story.vue";
const Modal_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Modal.story.vue"]]);
export {
  Modal_story as default
};
