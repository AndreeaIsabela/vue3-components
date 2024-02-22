import { as as openBlock, at as createElementBlock, au as createBaseVNode, aJ as createCommentVNode, aK as Fragment, aL as renderList, aH as toDisplayString, aw as normalizeClass, aM as computed, ax as resolveComponent, ay as createBlock, az as withCtx, aA as createVNode, aE as ref } from "./vendor-cb2674a4.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _hoisted_1 = {
  key: 0,
  class: "pagination d-flex justify-content-center"
};
const _hoisted_2 = {
  key: 0,
  class: "pagination-item"
};
const _hoisted_3 = ["disabled"];
const _hoisted_4 = {
  key: 1,
  class: "pagination-item"
};
const _hoisted_5 = ["disabled"];
const _hoisted_6 = {
  key: 2,
  class: "pagination-item extra"
};
const _hoisted_7 = { class: "pagination-item" };
const _hoisted_8 = ["onClick", "disabled"];
const _hoisted_9 = {
  key: 3,
  class: "pagination-item extra"
};
const _hoisted_10 = {
  key: 4,
  class: "pagination-item"
};
const _hoisted_11 = ["disabled"];
const _hoisted_12 = {
  key: 5,
  class: "pagination-item"
};
const _hoisted_13 = ["disabled"];
function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return $setup.props.totalPages > 1 ? (openBlock(), createElementBlock("ul", _hoisted_1, [
    $setup.shouldDisplayButton ? (openBlock(), createElementBlock("li", _hoisted_2, [
      createBaseVNode("button", {
        type: "button",
        onClick: $setup.onClickFirstPage,
        disabled: $setup.isInFirstPage
      }, "First", 8, _hoisted_3)
    ])) : createCommentVNode("v-if", true),
    $setup.shouldDisplayButton ? (openBlock(), createElementBlock("li", _hoisted_4, [
      createBaseVNode("button", {
        type: "button",
        onClick: $setup.onClickPreviousPage,
        disabled: $setup.isInFirstPage
      }, "<", 8, _hoisted_5)
    ])) : createCommentVNode("v-if", true),
    !$setup.containsPage(1) ? (openBlock(), createElementBlock("li", _hoisted_6, "...")) : createCommentVNode("v-if", true),
    (openBlock(true), createElementBlock(
      Fragment,
      null,
      renderList($setup.pages, (page) => {
        return openBlock(), createElementBlock("li", _hoisted_7, [
          createBaseVNode("button", {
            type: "button",
            onClick: ($event) => $setup.onClickPage(page.name),
            disabled: page.isDisabled,
            class: normalizeClass({ active: $setup.isPageActive(page.name) })
          }, toDisplayString(page.name), 11, _hoisted_8)
        ]);
      }),
      256
      /* UNKEYED_FRAGMENT */
    )),
    !$setup.containsPage($setup.props.totalPages) ? (openBlock(), createElementBlock("li", _hoisted_9, "...")) : createCommentVNode("v-if", true),
    $setup.shouldDisplayButton ? (openBlock(), createElementBlock("li", _hoisted_10, [
      createBaseVNode("button", {
        type: "button",
        onClick: $setup.onClickNextPage,
        disabled: $setup.isInLastPage
      }, ">", 8, _hoisted_11)
    ])) : createCommentVNode("v-if", true),
    $setup.shouldDisplayButton ? (openBlock(), createElementBlock("li", _hoisted_12, [
      createBaseVNode("button", {
        type: "button",
        onClick: $setup.onClickLastPage,
        disabled: $setup.isInLastPage
      }, "Last", 8, _hoisted_13)
    ])) : createCommentVNode("v-if", true)
  ])) : createCommentVNode("v-if", true);
}
const Pagination_vue_vue_type_style_index_0_scoped_d5bd784b_lang = "";
const _sfc_main$1 = {
  __name: "Pagination",
  props: {
    totalPages: {
      type: Number,
      required: true
    },
    maxVisibleButtons: {
      type: Number,
      default: 3
    },
    currentPage: {
      type: Number,
      default: 1
    }
  },
  emits: ["page-changed"],
  setup(__props, { expose: __expose, emit: __emit }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const shouldDisplayButton = computed(() => {
      return props.maxVisibleButtons < props.totalPages;
    });
    const startPage = computed(() => {
      if (props.currentPage === 1) {
        return 1;
      }
      if (props.currentPage === props.totalPages) {
        if (props.maxVisibleButtons >= props.totalPages) {
          return 1;
        }
        return props.totalPages - props.maxVisibleButtons + 1;
      }
      return props.currentPage - 1;
    });
    const pages = computed(() => {
      const range = [];
      for (let i = startPage.value; i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages); i++) {
        range.push({
          name: i,
          isDisabled: i === props.currentPage
        });
      }
      return range;
    });
    const isInFirstPage = computed(() => {
      return props.currentPage === 1;
    });
    const isInLastPage = computed(() => {
      return props.currentPage === props.totalPages;
    });
    const containsPage = (pageNo) => {
      return pages.value.some((element) => element.name === pageNo);
    };
    const isPageActive = (page) => {
      return props.currentPage === page;
    };
    const onClickFirstPage = () => {
      emit("page-changed", 1);
    };
    const onClickPreviousPage = () => {
      emit("page-changed", props.currentPage - 1);
    };
    const onClickPage = (page) => {
      emit("page-changed", page);
    };
    const onClickNextPage = () => {
      emit("page-changed", props.currentPage + 1);
    };
    const onClickLastPage = () => {
      emit("page-changed", props.totalPages);
    };
    const __returned__ = { props, emit, shouldDisplayButton, startPage, pages, isInFirstPage, isInLastPage, containsPage, isPageActive, onClickFirstPage, onClickPreviousPage, onClickPage, onClickNextPage, onClickLastPage, computed };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main$1.__file = "src/Pagination.vue";
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", render$1], ["__scopeId", "data-v-d5bd784b"], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Pagination.vue"]]);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_story = resolveComponent("story");
  return openBlock(), createBlock(_component_story, { title: "Pagination" }, {
    default: withCtx(() => [
      createVNode($setup["Pagination"], {
        totalPages: 10,
        maxVisibleButtons: 3,
        currentPage: $setup.currentPage,
        onPageChanged: $setup.handlePageChange
      }, null, 8, ["currentPage"])
    ]),
    _: 1
    /* STABLE */
  });
}
const _sfc_main = {
  __name: "Pagination.story",
  setup(__props, { expose: __expose }) {
    __expose();
    const currentPage = ref(2);
    const handlePageChange = (newPage) => {
      currentPage.value = newPage;
    };
    const __returned__ = { currentPage, handlePageChange, ref, Pagination };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
};
_sfc_main.__file = "src/Pagination.story.vue";
const Pagination_story = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", render], ["__file", "/Users/isabelaandreeabala/Documents/Learning/Vue/Vue Developer Cert/vue3-components/src/Pagination.story.vue"]]);
export {
  Pagination_story as default
};
