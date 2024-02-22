const __resolved__virtual_storySource_srcPaginationStoryVue = "<script setup>\nimport { ref } from 'vue';\nimport Pagination from './Pagination.vue';\n\nconst currentPage = ref(2);\n\nconst handlePageChange = (newPage) => {\n  // Fetch some data\n  currentPage.value = newPage;\n}\n\n<\/script>\n\n<template lang='pug'>\nstory(title='Pagination')\n  pagination(\n    :totalPages='10'\n    :maxVisibleButtons='3'\n    :currentPage='currentPage'\n    @page-changed='handlePageChange'\n  )\n</template>\n";
export {
  __resolved__virtual_storySource_srcPaginationStoryVue as default
};
