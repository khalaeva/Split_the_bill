<template>
    <div class="container">
      <Header/>
      <router-view/>
      <Footer/>
    </div>
  </template>

<script setup>
    import Header from './components/layouts/Header.vue'
    import Footer from './components/layouts/Footer.vue'
</script>

<style lang="scss" scoped>

</style>
