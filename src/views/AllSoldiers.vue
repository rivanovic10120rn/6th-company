<template>
  <div id="app">
    <Header subtitle="Soldiers"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="550" src="https://i.pinimg.com/originals/09/1e/5a/091e5a971812ff2f78380723679511da.jpg">
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
  name: 'Soldiers',
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