<script setup>
import Alert from './Alert.vue';

const imgPath = './src/assets/logo.svg';
</script>

<template lang='pug'>
story(title='Alert')
  variant(title='Success')
    alert(
      alertType='success'
      :imgPath='imgPath'
    )
      template(#body)
        span This is a success alert.

  variant(title='Warning')
    alert(
      alertType='warning'
      :imgPath='imgPath'
    )
      template(#body)
        span This is a warning alert.

  variant(title='Danger')
    alert(
      alertType='danger'
      :imgPath='imgPath'
    )
      template(#body)
        span This is a danger alert.

  variant(title='Important')
    alert(
      alertType='important'
      :imgPath='imgPath'
    )
      template(#body)
        span This is an important alert.

</template>
