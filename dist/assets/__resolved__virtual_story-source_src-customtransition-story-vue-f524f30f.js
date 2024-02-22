const __resolved__virtual_storySource_srcCustomtransitionStoryVue = `<script setup>
import { ref } from 'vue';
import CustomTransition from './CustomTransition.vue';

const buttons = ['fade', 'slide-x', 'slide-y', 'bounce']
const show = ref(true);
const currentTransition = ref('fade');

const changeTransition = (newTransition) => {
	if(newTransition !== currentTransition.value) {
		currentTransition.value = newTransition;
	}
	show.value = !show.value;
}
<\/script>

<template lang='pug'>
story(title='Transition')
  variant(title='Fade')
    #transition
      button(
        @click='changeTransition("fade")'
      ) Fade
      CustomTransition(name='fade')
        .square(v-show='show')

  variant(title='Slide-x')
    #transition.row
      button(
        @click='changeTransition("slide-x")'
      ) Slide-x
      CustomTransition(name='slide-x')
        .square(v-show='show')

  variant(title='Slide-y')
    #transition.row
      button(
        @click='changeTransition("slide-y")'
      ) Slide-y
      CustomTransition(name='slide-y')
        .square(v-show='show')

  variant(title='Bounce')
    #transition.row
      button(
        @click='changeTransition("bounce")'
      ) Bounce
      CustomTransition(name='bounce')
        .square(v-show='show')
</template>

<style lang='stylus'>
.square
	width: 100px
	height: 100px
	background-color: #87bc87
button
	margin-bottom: 50px
</style>
`;
export {
  __resolved__virtual_storySource_srcCustomtransitionStoryVue as default
};
