<script setup>
import { ref } from 'vue';
import Pagination from './Pagination.vue';

const currentPage = ref(2);

const handlePageChange = (newPage) => {
  // Fetch some data
  currentPage.value = newPage;
}

</script>

<template lang='pug'>
story(title='Pagination')
  pagination(
    :totalPages='10'
    :maxVisibleButtons='3'
    :currentPage='currentPage'
    @page-changed='handlePageChange'
  )
</template>
