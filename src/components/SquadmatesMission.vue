<template>
  <div>
    <!-- <b-pagination
      v-model="currentPage"
      :total-rows="soldiers.length"
      :per-page="perPage"
      aria-controls="squadmates-table"
    ></b-pagination> -->
    <b-table
      id="squadmates-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="soldiers"
      :squadID="squadID"
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
        name: 'SquadmatesMission',
        props: {
          squadID: String
        },

        data() {
          return {
            fields: ['name', 'tag', 'role', 'status'],
            currentPage: 1,
            perPage: 10,
          }
        },

        watch: {
          squadID(nVal, oVal) {
            this.fetchSoldiersBySquadID(this.squadID);
          }
        },
        
        mounted() {
            this.fetchSoldiersBySquadID(this.squadID);
        },

        computed: {
          ...mapState([
            'soldiers'
          ])
        },

        methods: {
          ...mapActions([
              'fetchSoldiersBySquadID'
          ]),
          rowClicked(record, index) {
            this.$router.push({ name: 'SingleSoldier', params: { id: record.id } });
          }
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>