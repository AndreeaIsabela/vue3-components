<template lang='pug'>
.row.d-flex
  .col-12.my-auto
    Pagination(
      :totalPages='10' 
      :maxVisibleButtons='3'
      :currentPage='currentPage'
      @page-changed='handlePageChange'
    )
</template>

<script setup>
import { ref } from 'vue';
import Pagination from '@/components/Pagination.vue'

const currentPage = ref(2);

const handlePageChange = (newPage) => {
  // Fetch some data
  currentPage.value = newPage;
}
</script>
