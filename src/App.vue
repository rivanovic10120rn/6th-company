<template>
  <div id="app">
    <div >
      <b-navbar id="nav" toggleable="lg" type="dark" >
        <b-navbar-brand to="/"><b-icon-droplet-fill variant="danger"></b-icon-droplet-fill> 6th Company</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/squads">Overview</b-nav-item>
            <b-nav-item to="/soldiers" >Soldiers</b-nav-item>
            <b-nav-item to="/loadouts">Loadouts</b-nav-item>
            <b-nav-item to="/missions" >Missions</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>Soldier</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import Company from '@/components/Company.vue';

  export default {
    name: 'App',

    components: {
      Header,
      Company
    },

    data() {
      return {
        // id: [],
        // current: 0
      }
    },

    // mounted() {
    //   fetch('http://localhost:8080/admin/squads')
    //     .then( obj => obj.json() )
    //       .then( res => {
    //         res.forEach( data => {
    //           this.id = data.id;
    //         })
    //         console.log(res);
    //       });
    // },

    methods: {
      next() {
        if(this.current * 10 < this.id.length){
          this.current++;
        }
      },

      prev() {
        if(this.current !== 0){
          this.current--;
        }
      },
    }

  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  background-color:#212222;
}

</style>
