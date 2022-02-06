<template>
  <div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

    export default {
        name: 'SingleSquad',

        components: {

        }
    }

</script>

<style scoped>

</style>