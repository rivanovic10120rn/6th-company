<template>
  <div class="info-sold" >
    <h5 v-if="tag"><b>Soldier Tag:</b> {{tag}}</h5>
    <h5 v-if="role"><b>Soldier Role:</b> {{role}}</h5>
    <h5 v-if="status"><b>Soldier Status:</b> {{status}}</h5>
    <h5 v-if="rangedWeapon"><b>Soldier's Ranged Weapons:</b> {{rangedWeapon}}</h5>
    <h5 v-if="meleeWeapon"><b>Soldier's Melee Weapons:</b> {{meleeWeapon}}</h5>
    <h5 v-if="armourType"><b>Soldier's Armour:</b> {{armourType}}</h5>
    <div @click="rowClicked" class="squad">
      <span class="border border-right-0 border-left-0 border-dark"><h5 class="dark" v-if="squadName"><b>Soldier's Squad:</b> {{squadName}}</h5></span>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'SoldierInfo',

    props: {
      squadID: Number,
      tag: String,
      role: String,
      status: String,
      rangedWeapon: String,
      meleeWeapon: String,
      armourType: String,
      squadName: String
    },

    data() {
      return {
        hover: false,
      };
    },

    methods: {
      rowClicked() {
        this.$router.push({ name: 'SingleSquad', params: { id: this.squadID } });
      }
    }

  }

</script>

<style scoped>
  .info-sold {
    padding-top: 5px;
    margin-bottom: 25px;
    font-family: 'old-english-text-mt-regular', sans-serif;
    font-style: normal;
  }

  .squad {
    cursor: pointer;
  }
</style>