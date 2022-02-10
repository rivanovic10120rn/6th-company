<template>
  <div>
    <Header subtitle="FOR THE EMPEROR AND SANGUINIUS" />

    <div class="row">
      <div class="column">
        <SquadmatesMission :squadID="mission.assignedSquad.id"/>
      </div>
      <div class="column">
        <MissionInfo :squadID="mission.assignedSquad.id" :description="mission.description" :location="mission.location" :assignedSquad="mission.assignedSquad.name" :missionStatus="mission.missionStatus" />
      </div>
    </div>
    <div class="row">
      <div class="column">
        <img alt="mission fluff" width="700" src="http://geniusproductions.co.uk/Cetus/images/d/da/Blood_Angels_Crest.jpg">
      </div>
      <div class="column">
        ovde ce ici svi komentari
      </div>
    </div>

  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import {mapActions, mapState} from "vuex";
  import SquadmatesMission from '@/components/SquadmatesMission.vue'
  import MissionInfo from '@/components/MissionInfo.vue'

    export default {
        name: 'SingleMission',

        components: {
          Header,
          SquadmatesMission,
          MissionInfo
        },
        
        data() {
          return {
            subtitle: '',
            squadID: 0,
            description: '',
            location: '',
            assignedSquad: '',
            missionStatus: '',
          }
        },

        computed: {
          ...mapState([
            'mission'
          ])
        },

        methods: {
          ...mapActions([
            'fetchMissionByID'
          ])
        },

        mounted() {
          this.fetchMissionByID(this.$route.params.id);
        }
    }

</script>

<style scoped>
.row {
    width: 2543px;
  }

  .column {
    text-align: left;
    float: left;
    width: 50%;
    padding: 100px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>