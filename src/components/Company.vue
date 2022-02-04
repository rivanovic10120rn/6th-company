<template>
  <div>
    <h2> {{ squads }} </h2>
  </div>
</template>

<script>

    export default {
        name: 'Company',

        props: {
          squads: Array 
        }
    }

</script>

<style scoped>

</style>