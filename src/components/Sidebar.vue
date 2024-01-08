<template lang='pug'>
aside#sidebar
  ul.nav.flex-column
    router-link.nav-item.text-center(
      tag='li' 
      :to='{ name: "alertView"}'
    )
      span.nav-link Alert Component
    router-link.nav-item.text-center(tag='li' :to='{ name: "modalView"}')
      span.nav-link Modal Component
</template>

<script setup>

</script>

<style lang='stylus' scoped>
#sidebar
  ul
    list-style: none
    padding: 100px 0 0 0
    a
      padding: 10px 0
      border-bottom: 1px solid black
      text-decoration: none
      span.nav-link
        font-weight: 500
        color: #2c3e50
    a.active, a:hover
      span.nav-link
        color: #3eaf7c
</style>