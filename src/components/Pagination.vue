<template lang='pug'>
ul.pagination.d-flex.justify-content-center(v-if='props.totalPages > 1')
	li.pagination-item(v-if='shouldDisplayButton')
		button(type='button' @click='onClickFirstPage' :disabled='isInFirstPage')
			| First
	li.pagination-item(v-if='shouldDisplayButton')
		button(type='button' @click='onClickPreviousPage' :disabled='isInFirstPage')
			| &lt;
	li.pagination-item.extra(v-if='!containsPage(1)')
		|...
	li.pagination-item(v-for='page in pages')
		button(type='button' @click='onClickPage(page.name)' :disabled='page.isDisabled' :class='{ active: isPageActive(page.name) }')
			| {{ page.name }}
	li.pagination-item.extra(v-if='!containsPage(props.totalPages)')
		|...
	li.pagination-item(v-if='shouldDisplayButton')
		button(type='button' @click='onClickNextPage' :disabled='isInLastPage')
			| &gt;
	li.pagination-item(v-if='shouldDisplayButton')
		button(type='button' @click='onClickLastPage' :disabled='isInLastPage')
			| Last
</template>
	
<script setup>
import { computed } from 'vue';

const props =  defineProps({
	totalPages: {
		type: Number, 
		required: true 
	},
	maxVisibleButtons: { 
		type: Number, 
		default: 3 
	},
	currentPage: { 
		type: Number, 
		default: 1 
	}
});

const emit = defineEmits(['page-changed']);

const shouldDisplayButton = computed(() => {
	return props.maxVisibleButtons < props.totalPages;
});

const startPage = computed(() => {
	if (props.currentPage === 1) {
		return 1;
	}

	if (props.currentPage === props.totalPages) {
		if (props.maxVisibleButtons >= props.totalPages) {
			return 1;
		}
		return props.totalPages - props.maxVisibleButtons + 1;
	}
	
	return props.currentPage - 1;
});

const pages =  computed(() => {
	const range = [];

	for (let i = startPage.value; i <= Math.min(startPage.value + props.maxVisibleButtons - 1, props.totalPages); i++ ) {
		range.push({
			name: i,
			isDisabled: i === props.currentPage
		});
	}

	return range;
});

const isInFirstPage = computed(() => {
	return props.currentPage === 1;
});

const isInLastPage = computed(() => {
	return props.currentPage === props.totalPages;
});

const containsPage = (pageNo) => {
	return  pages.value.some(element => element.name === pageNo);
};

const isPageActive = (page) => {
	return props.currentPage === page;
};

const onClickFirstPage = () => {
	emit('page-changed', 1);
};

const onClickPreviousPage = () => {
	emit('page-changed', props.currentPage - 1);
}

const onClickPage = (page) => {
	emit('page-changed', page);
};

const onClickNextPage = () => {
	emit('page-changed', props.currentPage + 1);
};

const onClickLastPage = () => {
	emit('page-changed', props.totalPages);
};
</script>

<style lang='stylus' scoped>
.pagination
  list-style-type: none
  margin: 0 auto
  .pagination-item
    display: inline-block
    button
      background-color: #F0F0F0
      color: #707086
      font-size: 18px
      padding: 8px 15px
      border-radius: 6px
      border: 1px solid #F0F0F0
      margin: 5px
      outline: none
      &:disabled
        opacity: 0.5
    button.active
      background-color: #87bc87
      border: 1px solid #87bc87
      color: #ffffff
      &:disabled
        opacity: 1
  .extra
    color: #707086
    opacity: 0.8
    padding: 7px 7px
    font-size: 20px
    cursor: default
    user-select: none
</style>