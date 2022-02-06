<template>
  <div class="info-sold">
    <h5 ><b>Grenades:</b> {{grenades}}</h5>
    <h5 v-if="rangedWeapon"><b>Ranged Weapons:</b> {{rangedWeapon}}</h5>
    <h5 v-if="meleeWeapon"><b>Melee Weapons:</b> {{meleeWeapon}}</h5>
    <h5 v-if="armourType"><b>Armour:</b> {{armourType}}</h5>
  </div>
</template>

<script>

  export default {
    name: 'LoadoutInfo',
    props: {
      grenades: Boolean,
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