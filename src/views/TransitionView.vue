<template lang='pug'>
#transition.row
	.offset-2.col-8.my-auto.buttons
		button.btn-green(
			v-for='button in buttons'
			:key='button'
			@click='changeTransition(button)'
		) {{ button }}
	.offset-2.col-8.my-auto
		CustomTransition(:name='currentTransition')
			.square(v-show='show')
</template>

<script setup>
import { ref } from 'vue';
import CustomTransition from '@/components/CustomTransition.vue';

const buttons = ['fade', 'slide-x', 'slide-y', 'bounce']
const show = ref(true);
const currentTransition = ref('fade');

const changeTransition = (newTransition) => {
	if(newTransition !== currentTransition.value) {
		currentTransition.value = newTransition;
	}
	show.value = !show.value;
}
</script>

<style lang='stylus'>
#transition
	.btn-green
		margin-right: 20px
.square
	width: 100px
	height: 100px
	background-color: #87bc87
.buttons
	position fixed
</style>