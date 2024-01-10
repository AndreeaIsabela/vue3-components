<template lang='pug'>
.row
  .offset-2.col-8
    Alert(
      v-for='alertType in alertTypes'
      :key='alertType'
      :alertType='alertType' 
      :imgPath='imgPath'
    )
      template(#body)
        span This is an {{ alertType }} alert.
</template>

<script setup>
import { ref } from 'vue';
import Alert from '@/components/Alert.vue';

const imgPath = './src/assets/logo.svg';
const alertTypes = [
  'warning',
  'danger',
  'success',
  'important'
];
</script>

<style lang='stylus'>
.alert
  margin-top: 80px
</style>
