<template>
  <div id="app">
    <Header subtitle="Loadouts"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="450" src="https://i.pinimg.com/originals/86/db/ef/86dbef16f5020b7101518bc3b1a17b23.jpg">
      </div>
      <div class="column">

      </div>
    </div>
    
    
    <ImageList v-if="imageIDs" :objects="imageIDs" />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Loadouts',
  components: {
    Header
  }
}
</script>

<style scoped>
  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>