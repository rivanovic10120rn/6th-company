<template>
  <div class="home">
    <Header subtitle="Overview"/>
    <img alt="chapter banner held" width="1100" src="https://cdnb.artstation.com/p/assets/images/images/034/657/147/4k/klaher-baklaher-bloodangels2.jpg?1612876829">
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>

<style scoped>
  .home {
    font-family: 'old-english-text-mt-regular', sans-serif;
  }
</style>
