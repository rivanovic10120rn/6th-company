<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="soldierThreads.length"
      :per-page="perPage"
      aria-controls="soldierThreads-table"
    ></b-pagination>
    <b-table
      id="soldierThreads-table"
      bordered
      head-variant="dark"
      hover
      :items="soldierThreads"
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
      :total-rows="soldierThreads.length"
      :per-page="perPage"
      aria-controls="soldierThreads-table"
    ></b-pagination>
  </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'SoldierMessageList',

        data() {
          return {
            fields: ['message', 'recieved', 'createdAt', 'updatedAt'],
            currentPage: 1,
            perPage: 20
          }
        },
        
        mounted() {
          this.fetchThreadBySoldierID(this.$route.params.id);
        },

        computed: {
          ...mapState([
            'soldierThreads',
          ])
        },

        methods: {
          ...mapActions([
              'fetchThreadBySoldierID',
          ]),
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>