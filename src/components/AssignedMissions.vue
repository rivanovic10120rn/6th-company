<template>
  <div>
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="soldiers.length"
      :per-page="perPage"
      aria-controls="squadmates-table"
    ></b-pagination> -->
    <b-table
      id="assigned-missions-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="missions"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="soldiers.length"
      :per-page="perPage"
      aria-controls="squadmates-table"
    ></b-pagination> -->
  </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'AssignedMissions',

        data() {
          return {
            fields: ['description', 'location', {key:'assignedSquad.name', label:'Assigned Squad'}, 'missionStatus'],
            currentPage: 1,
            perPage: 10
          }
        },
        
        mounted() {
          this.fetchMissionsBySquadID(this.$route.params.id);
        },

        computed: {
          ...mapState([
            'missions'
          ])
        },

        methods: {
          ...mapActions([
              'fetchMissionsBySquadID'
          ]),
          rowClicked(record, index) {
            this.$router.push({ name: 'SingleMission', params: { id: record.id } });
          }
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>