<template>
  <div id="app">
    <div >
      <b-navbar id="nav" toggleable="lg" type="dark" >
        <b-navbar-brand to="/"><b-icon-droplet-fill variant="danger"></b-icon-droplet-fill> 6th Company</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item to="/squads">Squads</b-nav-item>
            <b-nav-item to="/soldiers" >Soldiers</b-nav-item>
            <b-nav-item to="/loadouts">Loadouts</b-nav-item>
            <b-nav-item to="/missions" >Missions</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!token" to="/login">Log In</b-nav-item>
            <b-nav-item v-else @click="logout()">Log Out</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import { mapState, mapMutations } from 'vuex';

  export default {
    name: 'App',

    computed: {
      ...mapState([
        'token'
      ])
    },

    mounted() {
      if (localStorage.token) {
        this.setToken(localStorage.token);
      }
    },

    methods: {

      ...mapMutations([
        'removeToken',
        'setToken'
      ]),

      logout() {
        this.removeToken();
      }
    },

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
