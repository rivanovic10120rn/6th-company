<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="missionThreads.length"
      :per-page="perPage"
      aria-controls="missionthreads-table"
    ></b-pagination>
    <b-table
      id="missionthreads-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="missionThreads"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="missionThreads.length"
      :per-page="perPage"
      aria-controls="missionthreads-table"
    ></b-pagination>
  </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'MissionThreadsList',

        data() {
          return {
            fields: ['message', 'message status', 'createdAt', 'updatedAt'],
            currentPage: 1,
            perPage: 20
          }
        },
        
        mounted() {
          this.fetchThreads();
          this.fetchThreadBySoldierID();
          this.fetchThreadByMissionID();
        },

        computed: {
          ...mapState([
            'missionThreads',
            'soldierMissionThreads',
            'missionMissionThreads'
          ])
        },

        methods: {
          ...mapActions([
              'fetchThreads',
              'fetchThreadsBySoldierID',
              'fetchThreadsByMissionID'
          ]),
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>