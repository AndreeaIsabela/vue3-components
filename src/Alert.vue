<template lang='pug'>
p.alert.text-left(:class='"alert-" + alertType')
  span.icon-placeholder
    img(width='36' height='36' :src='imgPath')
  slot(name='body')
    span Alert body
</template>

<script setup>
const { alertType, imgPath } = defineProps({
	alertType: {
		type: String,
		required: true,
		default: 'success',
		validator(value, props) {
      return ['success', 'warning', 'danger', 'important'].includes(value)
    }
	},
	imgPath: {
		type: String,
		required: true,
		default: ''
	}
});
</script>

<style lang='stylus'>
p.alert
  color rgba(64,66,73,1)
  display: block

.alert
  position: relative
  z-index: 1
  padding: 12px 12px 12px 82px
  margin-bottom: 10px
  margin-top: 10px
  border-radius: 1.875px
  border: 1px solid
  overflow: hidden
  background-color: #fff
  background-image: none
  font-size: 16px;

.icon-placeholder
  width: 50px
  position: absolute
  left: 0
  top: 0
  height: 100%
  img 
    position: absolute
    left: 50%
    margin-left: -18px
    top: 50%
    margin-top: -18px

/* Success */
p.alert.alert-success
  border: 1px solid #8ACB88
  span.icon-placeholder
    background-color: #8ACB88
    margin-right: 20px

/* Danger */
p.alert.alert-danger
  border: 1px solid #F47A7A
  span.icon-placeholder
    background-color: #F47A7A
    margin-right: 20px

/* Warning */
.alert-warning
  border-color #fff4d3  
.alert-warning .icon-placeholder
  background-color #fff4d3
  margin-right: 20px

/* Important */
.alert-important
  border-color #5fc2ff

.alert-important .icon-placeholder
  background-color #5fc2ff
  margin-right: 20px
</style>