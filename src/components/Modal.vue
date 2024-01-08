<template lang="pug">
transition(name='modal-fade')
	.customModal-backdrop
		.customModal(role='dialog' aria-labelledby='modalTitle' aria-describedby='modalDescription')
			header#modalTitle.customModal-header
				button.btn-close(type='button' @click='$emit("close")' aria-label='Close modal') X
				slot(name='header')
					span Title
			section#modalDescription.customModal-body
				slot(name='body')
					span Modal body
			footer.customModal-footer
				slot(name='footer')
					span Footer
</template>
    
<script setup>

</script>

<style lang="stylus" scoped>
.modal-fade-enter-active,
.modal-fade-leave-active 
  transition: opacity 0.5s ease

.modal-fade-enter-from,
.modal-fade-leave-to
  opacity: 0
.customModal-backdrop 
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color rgba(0, 0, 0, 0.3)
    display flex
    justify-content center
    align-items center
    
.customModal 
    background #ffffff
    box-shadow 0px 0px 6px -1px rgba(107, 106, 107, 1)
    overflow-x auto
    display flex
    flex-direction column
    width 500px
    border-radius 8px
    padding 10px

.btn-close 
    border none
    color black
    cursor pointer
    background transparent
    padding 0
    outline none
    float: right 
    font-size: 14px
</style>