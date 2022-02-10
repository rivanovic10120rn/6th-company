<template>
  <div id="app" v-if="token">
    <Header subtitle="Squads"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="800" src="https://pbs.twimg.com/media/EnxljX5W8AACAW2.jpg">
      </div>
      <div class="column">
        <SquadList />
      </div>
    </div>
  </div>
  <p v-else>You must be signed in battle brother. If you are not a Blood Angel you shall be shot on sight if noticed attempting to enter the service like the heretic you are. <img alt="horizontal-drapery" width="800" src="https://i.kym-cdn.com/photos/images/original/000/954/011/a94.jpg"></p>
  
</template>

<script>
  import Header from '@/components/Header.vue';
  import SquadList from '@/components/SquadList.vue';
  import { mapActions, mapState } from 'vuex';


  export default {
    name: 'Squads',
    
    components: {
      Header,
      SquadList
    },

    data() {
        return {
            subtitle: ''
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
