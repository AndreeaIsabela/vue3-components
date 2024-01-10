<template lang='pug'>
Transition(
	:appear='immediate'
	:mode='props.mode'
	:name='props.name'
	@enter='$emit("enter")'
	@leave='$emit("leave")'
)
  slot
</template>

<script setup>
defineEmits(['enter', 'leave']);
const props = defineProps({
	immediate: {
		type: Boolean,
		required: false,
		default: false
	},
	mode: {
		type: String,
		required: false,
		default: 'out-in'
	},
	name: {
		type: String,
		required: false,
		default: 'fade',
		validator(value, props) {
      return ['fade', 'slide-x', 'slide-y', 'bounce'].includes(value)
    }
	},
})
</script>

<style lang='stylus'>

@keyframes bounce-in 
  0% 
    transform: scale(0)
  
  50% 
    transform: scale(1.25)
  
  100% 
    transform: scale(1)

.fade-enter-active,
.fade-leave-active
  transition: opacity .7s ease

.fade-enter-from,
.fade-leave-to,
.slide-x-enter-from,
.slide-y-enter-from,
.slide-x-leave-to,
.slide-y-leave-to 
  opacity: 0

.slide-x-enter-active,
.slide-y-enter-active
  transition: all 0.3s ease-out

.slide-x-leave-active,
.slide-y-leave-active 
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1)

.slide-x-enter-from
  transform: translateX(-50px)
.slide-y-enter-from
  transform: translateY(-50px)

.slide-x-leave-to
  transform: translateX(50px)
.slide-y-leave-to 
  transform: translateY(50px)

.bounce-enter-active 
  animation: bounce-in 0.5s

.bounce-leave-active 
  animation: bounce-in 0.5s reverse

</style>