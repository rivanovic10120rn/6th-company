<template>
  <div>
    <Header subtitle="For Sanguinius" />

    <div class="row">
      <div class="column">
        <SquadmatesMission :squadID="mission.assignedSquad.id"/>
      </div>
      <div class="column">
        <MissionInfo :description="mission.description" :location="mission.location" :assignedSquad="mission.assignedSquad.name" :missionStatus="mission.missionStatus" />
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