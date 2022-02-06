<template>
  <div>
    <b-pagination
      v-model="currentPage"
      :total-rows="loadouts.length"
      :per-page="perPage"
      aria-controls="loadouts-table"
    ></b-pagination>
    <b-table
      id="loadouts-table"
      bordered
      head-variant="dark"
      hover
      fixed
      :items="loadouts"
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
      :total-rows="loadouts.length"
      :per-page="perPage"
      aria-controls="loadouts-table"
    ></b-pagination>
  </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';

    export default {
        name: 'LoadoutList',

        data() {
          return {
            fields: ['type', 'rangedWeapon', 'meleeWeapon', 'armourType', { key: 'hasGrenades', tdClass: 'align-middle' }],
            currentPage: 1,
            perPage: 20
          }
        },
        
        mounted() {
          this.fetchLoadouts();
        },

        computed: {
          ...mapState([
            'loadouts'
          ])
        },

        methods: {
          ...mapActions([
              'fetchLoadouts'
          ]),
          rowClicked(record, index) {
            this.$router.push({ name: 'SingleLoadout', params: { id: record.id } });
          }
        }
    }

</script>

<style scoped>
  .pagination {
    justify-content: center;
  }
</style>