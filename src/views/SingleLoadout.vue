<template>
  <div>
    <Header :subtitle="loadout.type" />

    <div class="row">
      <div class="column">
        <img alt="loadouts" width="850" src="https://i.pinimg.com/736x/a7/c3/4b/a7c34b1489e0d7a5a463f3e73ebe069f.jpg">
      </div>
      <div class="column">
        <LoadoutInfo :grenades="loadout.hasGrenades" :rangedWeapon="loadout.rangedWeapon" :meleeWeapon="loadout.meleeWeapon" :armourType="loadout.armourType" />
        <Loadouters />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import LoadoutInfo from '@/components/LoadoutInfo.vue'
  import Loadouters from '@/components/Loadouters.vue'
  import {mapActions, mapState} from "vuex";

    export default {
        name: 'SingleLoadout',

        components: {
          Header,
          LoadoutInfo,
          Loadouters
        },

        computed: {
          ...mapState([
            'loadout'
          ])
        },

        data() {
          return {
            subtitle: '',
            fields: ['name', 'tag', 'role', 'status'],
            grenades:  '',
            rangedWeapon:  '',
            meleeWeapon:  '',
            armourType:  '',
          }
        },

        methods: {
          ...mapActions([
            'fetchLoadoutByID'
          ])
        },

        mounted() {
          // this.fetchSoldiersByLoadoutID(this.$route.params.id);
          this.fetchLoadoutByID(this.$route.params.id);
        }
    }

</script>

<style scoped>
.row {
    width: 2543px;
  }

  .column {
    text-align: left;
    float: left;
    width: 50%;
    padding: 100px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>