<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="missionMissionThreads.length"
      :per-page="perPage"
      aria-controls="missionthreads-table"
    ></b-pagination>
    <b-table
      id="missionthreads-table"
      bordered
      head-variant="dark"
      hover
      :items="missionMissionThreads"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
    >
    <template #cell(recieved)="data">
        <b-icon v-if="data.value" icon="check-circle" variant="success" scale="1"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="1"></b-icon>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="missionMissionThreads.length"
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
            fields: ['message', 'recieved', 'createdAt', 'updatedAt'],
            currentPage: 1,
            perPage: 20
          }
        },
        
        mounted() {
        //   this.fetchThreads();
        //   this.fetchThreadBySoldierID();
          this.fetchThreadByMissionID(this.$route.params.id);
        },

        computed: {
          ...mapState([
            // 'missionThreads',
            // 'soldierMissionThreads',
            'missionMissionThreads'
          ])
        },

        methods: {
          ...mapActions([
            //   'fetchThreads',
            //   'fetchThreadsBySoldierID',
              'fetchThreadByMissionID'
          ]),
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>