<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="squads.length"
      :per-page="perPage"
      aria-controls="image-table"
    ></b-pagination>
    <b-table
      id="image-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="items"
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
      aria-controls="image-table"
    ></b-pagination>
  </div>
</template>

<script>

    export default {
        name: 'SoldierList',

        data() {
          return {
            fields: ['name', 'type', 'status'],
            items: [],
            currentPage: 1,
            perPage: 10,
          }
        },
        
        props: {
          squads: Array
        },

        watch: {
          currentPage(nVal, oVal) {
            this.squads.slice(nVal * 10, (nVal + 1) * 10).map( obj => {
              fetch('http://localhost:8080/admin/squads')
                .then( obj => obj.json())
                  .then( res => {
                    res.forEach( el => this.items.push(el))
                  } );
            });
          }
        },

        mounted() {
          this.squads.slice(this.currentPage * 10, (this.currentPage + 1) * 10).map( obj => {
             fetch('http://localhost:8080/admin/squads')
                .then( obj => obj.json())
                .then( res => {
                    res.forEach( el => this.items.push(el))
                   } );
          });
        },

        methods: {
          rowClicked(record, index) {
            this.$router.push({ name: 'Single', params: { id: record.objectID } });
          }
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>