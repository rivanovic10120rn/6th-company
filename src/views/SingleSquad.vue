<template>
  <div>
    <Header :subtitle="squad.name" />
    <Squadmates />
    <AssignedMissions />
    <img alt="generic-shooting-pose" width="850" src="https://www.warhammer-community.com/wp-content/uploads/2020/07/Eq57vMH2uu3HpA0W.jpg">
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  import {mapActions, mapState} from "vuex";
  import Squadmates from '@/components/Squadmates.vue'
  import AssignedMissions from '@/components/AssignedMissions.vue'

    export default {
        name: 'SingleSquad',

        components: {
          Header,
          Squadmates,
          AssignedMissions
        },

        data() {
          return {
            subtitle: ''
          }
        },

        computed: {
          ...mapState([
            'squad'
          ])
        },

        methods: {
          ...mapActions([
            'fetchSquadByID'
          ])
        },

        mounted() {
          this.fetchSquadByID(this.$route.params.id);
        }
    }

</script>

<style scoped>

</style>