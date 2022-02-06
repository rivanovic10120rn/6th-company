<template>
  <div id="app">
    <Header subtitle="Soldiers"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="550" src="https://warhammerart.com/wp-content/uploads/2018/01/Blood-Angels-Command-Company.jpg">
      </div>
      <div class="column">
        <SoldierList />
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Header from '@/components/Header.vue'
  import SoldierList from '@/components/SoldierList.vue'

  export default {
    name: 'Soldiers',
    components: {
      Header,
      SoldierList
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