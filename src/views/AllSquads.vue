<template>
  <div id="app">
    <Header subtitle="Squads"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="750" src="https://pbs.twimg.com/media/EnxljX5W8AACAW2.jpg">
      </div>
      <div class="column">
        <SquadList v-if="allSquads" :squads="allSquads" />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import SquadList from '@/components/SquadList.vue';

  export default {
    name: 'Squads',
    
    components: {
      Header,
      SquadList
    },

    data() {
        return {
            subtitle: '',
            allSquads: []
        }
    },

    // watch: {
    //   $route() {
    //     this.subtitle = this.$route.params.name;
    //     this.depID = this.$route.params.id;

    //   }
    // },

    mounted() {
        // this.subtitle = this.$route.params.name;
        // this.depID = this.$route.params.id;

        fetch('http://localhost:8080/admin/squads')
            .then( obj => obj.json() )
            .then( res => {
              this.allSquads = res;
            });
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
