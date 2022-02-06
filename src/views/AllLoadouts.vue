<template>
  <div id="app">
    <Header subtitle="Loadouts"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery"  src="https://i.pinimg.com/736x/a7/c3/4b/a7c34b1489e0d7a5a463f3e73ebe069f.jpg">
      </div>
      <div class="column">
        <LoadoutList />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
  import LoadoutList from '@/components/LoadoutList.vue'

export default {
  name: 'Loadouts',
  components: {
    Header,
    LoadoutList
  },

  data() {
      return {
          subtitle: '',
      }
  },
  
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