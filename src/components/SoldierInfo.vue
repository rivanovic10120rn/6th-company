<template>
  <div class="info-sold">
    <h5 v-if="tag"><b>Soldier Tag:</b> {{tag}}</h5>
    <h5 v-if="role"><b>Soldier Role:</b> {{role}}</h5>
    <h5 v-if="status"><b>Soldier Status:</b> {{status}}</h5>
    <h5 v-if="rangedWeapon"><b>Soldier's Ranged Weapons:</b> {{rangedWeapon}}</h5>
    <h5 v-if="meleeWeapon"><b>Soldier's Melee Weapons:</b> {{meleeWeapon}}</h5>
    <h5 v-if="armourType"><b>Soldier's Armour:</b> {{armourType}}</h5>
    <h5 v-if="squadName"><b>Soldier's Squad:</b> {{squadName}}</h5>
  </div>
</template>

<script>

  export default {
    name: 'SoldierInfo',
    props: {
      tag: String,
      role: String,
      status: String,
      rangedWeapon: String,
      meleeWeapon: String,
      armourType: String,
      squadName: String
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
</style>