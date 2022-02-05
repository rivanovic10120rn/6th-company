<template>
  <div id="app">
    <Header subtitle="Missions"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="625" src="https://warofsigmarus.s3.amazonaws.com/uploads/blogging/picture1/4964/qmJYVuFh36arvtqw.jpg">
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
  name: 'Missions',
  components: {
    Header
  }
}
</script>

<style scoped>
  .row {
    width: 2543px;
  }

  .column {
    float: left;
    width: 50%;
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>