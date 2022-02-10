<template>
  <div id="app" v-if="token">
    <Header subtitle="Missions"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-crest" width="625" src="https://warofsigmarus.s3.amazonaws.com/uploads/blogging/picture1/4964/qmJYVuFh36arvtqw.jpg">
      </div>
      <div class="column">
        <MissionList />
      </div>
    </div>
  </div>
  <p v-else>You must be signed in battle brother. If you are not a Blood Angel you shall be shot on sight if noticed attempting to enter the service like the heretic you are. <img alt="horizontal-drapery" width="800" src="https://i.kym-cdn.com/photos/images/original/000/954/011/a94.jpg"></p>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
  import MissionList from '@/components/MissionList.vue'
  import { mapActions, mapState } from 'vuex';


export default {
  name: 'Missions',
  components: {
    Header,
    MissionList
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