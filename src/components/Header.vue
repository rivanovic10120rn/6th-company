<template>
  <div class="naslov">
    <img alt="horizontal drapery" width="850" src="https://www.warhammer-community.com/wp-content/uploads/2019/11/224cf832.jpg">
    <h1> The Blood Angels 6th Company 'Eternals'</h1>
    <h3 v-if="subtitle"> {{ subtitle }} </h3>
  </div>
</template>

<script>

  export default {
    name: 'Header',
    props: {
      subtitle: String
    }

  }

</script>

<style scoped>
  .naslov {
    padding-top: 5px;
    margin-bottom: 25px;
    font-family: 'old-english-text-mt-regular', sans-serif;
    font-style: normal;
  }
</style>