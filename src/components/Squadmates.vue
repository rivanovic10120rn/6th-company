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
        name: 'Squadmates',

        data() {
          return {
            fields: ['name', 'tag', 'role', 'status'],
            currentPage: 1,
            perPage: 10
          }
        },
        
        mounted() {
          this.fetchSoldiersBySquadID(this.$route.params.id);
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