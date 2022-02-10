<template>
  <div class="info-sold">
    <h5 v-if="description"><b>Mission information:</b> {{description}}</h5>
    <h5 v-if="location"><b>Target location:</b> {{location}}</h5>
    
    <div @click="rowClicked" class="mission">
      <span class="border border-right-0 border-left-0 border-dark"><h5 v-if="assignedSquad"><b>Assigned Squad:</b> {{assignedSquad}}</h5></span>
    </div>
    <h5 v-if="missionStatus"><b>Mission status:</b> {{missionStatus}}</h5>
  </div>
</template>

<script>

  export default {
    name: 'MissionInfo',
    props: {
      squadID:Number,
      description: String,
      location: String,
      assignedSquad: String,
      missionStatus: String
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
  
  .mission {
    cursor: pointer;
  }
</style>