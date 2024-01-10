<template lang='pug'>
button.btn-green#openModal(@click='toggleModal') Open modal
h3 {{notes}}
Modal(v-if='isModalVisible' @close='toggleModal')
	template(#header)
		span ADDITIONAL NOTES
	template#modalMain(#body)
		textarea#modalNotes(
			placeholder='e.g: Tell us about the modal body'
			rows='7'
			v-model='notes'
		)
	template(#footer)
		button.btn-green(
			type='button'
			@click='save'
			aria-label='Close modal'
			) SAVE
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const isModalVisible = ref(false);
const notes = ref('');

const toggleModal = () => {
	isModalVisible.value = !isModalVisible.value;
}

const save = () => {
	// do smth
	toggleModal();
}

</script>

<style lang='stylus' scooped>
textarea
	margin: 10px 0
	box-shadow 0px 0px 6px -1px rgba(189, 187, 189, 1)
	width 100%
	border none
	border 1px solid #cecccc
	border-radius 4px
	padding 5px
	resize none
	padding-left 10px
	&::placeholder
		color #cecccc
.customModal-footer
	padding 10px 15px 20px 15px
	display flex
.customModal-header
	justify-content space-between
	padding 10px 15px 10px 15px
	span
		padding 5px
		color #cecccc
		font-size small
		cursor default
.customModal-footer
	justify-content flex-end
.customModal-body
	position relative
	padding 0 25px 10px 20px
#openModal
	margin: 100px
</style>
