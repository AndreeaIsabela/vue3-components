<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
</script>

<template lang="pug">
.row
  .col-3
    Sidebar
  .col-9
    RouterView
</template>

<style scoped>
</style>
