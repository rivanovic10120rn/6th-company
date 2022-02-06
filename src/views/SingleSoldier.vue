<template>
  <div>
    <Header :subtitle="soldier.name" />

    <div class="row">
      <div class="column">
        <img alt="tactical marine" width="850" src="https://www.asgard.gg/wp-content/uploads/2018/12/332_573355124bf35.jpg">
      </div>
      <div class="column">
        <SoldierInfo :tag="soldier.tag" :role="soldier.role" :status="soldier.status" :rangedWeapon="soldier.equippedWith.rangedWeapon" :meleeWeapon="soldier.equippedWith.meleeWeapon" :armourType="soldier.equippedWith.armourType" :squadName="soldier.squad.name" />
        Ovde ce ici lista svih poruka
      </div>
    </div>

  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import SoldierInfo from '@/components/SoldierInfo.vue'
  import {mapActions, mapState} from "vuex";

    export default {
        name: 'SingleSoldier',

        components: {
          Header,
          SoldierInfo
        },

        computed: {
          ...mapState([
            'soldier'
          ])
        },

        data() {
          return {
            subtitle: '',
            fields: ['tag', 'role', 'status'],
            tag: '',
            role: '',
            status: '',
            rangedWeapon: '',
            meleeWeapon: '',
            armourType: '',
            squadName: ''
          }
        },

        

        methods: {
          ...mapActions([
            'fetchSoldierByID'
          ])
        },

        mounted() {
          this.fetchSoldierByID(this.$route.params.id);
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