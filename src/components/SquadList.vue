<template>
  <div>
    <b-pagination class="customPagination"
      v-model="currentPage"
      :total-rows="squads.length"
      :per-page="perPage"
      aria-controls="squad-table"
    >
      
    </b-pagination>
    <b-table
      id="squad-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="squads"
      :fields="fields"
      small
      :per-page="perPage"
      :current-page="currentPage"
      @row-clicked="rowClicked"
    >
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="squads.length"
      :per-page="perPage"
      aria-controls="squad-table"
    ></b-pagination>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

    export default {
        name: 'SquadList',

        data() {
          return {
            fields: ['name', 'type', 'status'],
            currentPage: 1,
            perPage: 10
          }
        },
        
        mounted() {
          this.fetchSquads();
        },

        computed: {
          ...mapState([
            'squads'
          ])
        },

        // watch: {
        //   currentPage(nVal, oVal) {
        //     this.squads.slice(nVal * 10, (nVal + 1) * 10).map( obj => {
        //       fetch('http://localhost:8080/admin/squads')
        //         .then( obj => obj.json())
        //           .then( res => {
        //             res.forEach( el => this.items.push(el))
        //           } );
        //     });
        //   }
        // },

        // mounted() {
        //   this.squads.slice(this.currentPage * 10, (this.currentPage + 1) * 10).map( obj => {
        //      fetch('http://localhost:8080/admin/squads')
        //         .then( obj => obj.json())
        //         .then( res => {
        //             res.forEach( el => this.items.push(el))
        //            } );
        //   });
        // },

        methods: {
          ...mapActions([
              'fetchSquads'
          ]),
          rowClicked(record, index) {
            this.$router.push({ name: 'SingleSquad', params: { id: record.objectID } });
          }
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>