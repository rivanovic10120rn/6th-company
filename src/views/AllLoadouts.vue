<template>
  <div id="app" v-if="token">
    <Header subtitle="Loadouts"/>
    <div class="row">
      <div class="column">
        <img alt="vertical-loadout"  src="https://i.pinimg.com/736x/a7/c3/4b/a7c34b1489e0d7a5a463f3e73ebe069f.jpg">
      </div>
      <div class="column">
        <LoadoutList />
      </div>
    </div>
  </div>
  <p v-else>You must be signed in battle brother. If you are not a Blood Angel you shall be shot on sight if noticed attempting to enter the service like the heretic you are. <img alt="horizontal-drapery" width="800" src="https://i.kym-cdn.com/photos/images/original/000/954/011/a94.jpg"></p>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
  import LoadoutList from '@/components/LoadoutList.vue'
  import { mapActions, mapState } from 'vuex';


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

  computed: {
      ...mapState([
        'token'
      ])
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