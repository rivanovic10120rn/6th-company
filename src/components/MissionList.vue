<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="missions.length"
      :per-page="perPage"
      aria-controls="missions-table"
    ></b-pagination>
    <b-table
      id="missions-table"
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
    <template #cell(hasGrenades)="data">
        <b-icon v-if="data.value" icon="check-circle" variant="success" scale="1"></b-icon>
        <b-icon v-else icon="x-circle" variant="danger" scale="1"></b-icon>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="missions.length"
      :per-page="perPage"
      aria-controls="missions-table"
    ></b-pagination>
  </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'MissionsList',

        data() {
          return {
            fields: ['description', 'location', {key:'assignedSquad.name', label:'Assigned Squad'}, 'missionStatus'],
            currentPage: 1,
            perPage: 10
          }
        },
        
        mounted() {
          this.fetchMissions();
        },

        computed: {
          ...mapState([
            'missions'
          ])
        },

        methods: {
          ...mapActions([
              'fetchMissions'
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