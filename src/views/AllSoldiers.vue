<template>
  <div id="app">
    <Header subtitle="Soldiers"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="550" src="https://warhammerart.com/wp-content/uploads/2018/01/Blood-Angels-Command-Company.jpg">
      </div>
      <div class="column">
        <SoldierList v-if="allSoldiers" :squads="allSoldiers" />
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
              allSoldiers: []
          }
      },

      mounted() {

          fetch('http://localhost:8080/admin/soldiers')
              .then( obj => obj.json() )
              .then( res => {
                res.forEach( el => this.allSoldiers.push(el))
              } );
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