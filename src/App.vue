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

<style lang='stylus'>
.row
  height: 100%

button.btn-green
	background: linear-gradient(to top right,#41b782,#86d169)
	padding: 0 30px
	color: #fff
	text-decoration: none
	align-items: center
	justify-content: center
	line-height: 44px
	border: none
	border-radius: 30px
	cursor: pointer
	transition: all .55s cubic-bezier(.19,1,.22,1)
	overflow: hidden
	position: relative
	height: 54px
	margin: 0.5em 0
	&:hover
		background: linear-gradient(to bottom right,#41b782,#86d169)
</style>