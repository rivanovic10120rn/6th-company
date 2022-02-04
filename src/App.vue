<template>
  <div id="app">
    <Header :title="title" />
    <p>
      <button @click="prev()">Previous</button>
      <span> . . . </span>
      <button @click="next()">Next</button>
    </p>
    <Company v-if="id" :id="id.slice(current * 10, (current + 1) * 10)" />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<script>

  import Header from './components/Header.vue';
  import Company from './components/Company.vue';

  export default {
    name: 'App',

    components: {
      Header,
      Company
    },

    data() {
      return {
        title: 'Blood Angels 6th Company',
        id: null,
        current: 0
      }
    },

    mounted() {
      fetch('http://localhost:8080/admin/squads')
        .then( obj => obj.json())
          .then( res => {
            this.id = res.id;
          })
    },

    methods: {
      next() {
        if(this.current * 10 < this.current.length){
          this.current++;
        }
      },

      prev() {
        if(this.current !== 0){
          this.current--;
        }
      }
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
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
