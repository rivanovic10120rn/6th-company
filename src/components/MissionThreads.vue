<template>

  <div class="container-fluid">
    <h4>Mission Thread</h4>

    <div v-if="token">
      <b-form-textarea
          required
          v-model="missionThread"
          placeholder="Enter your status update..."
      ></b-form-textarea>
      <b-form-invalid-feedback id="input-live-feedback">
        Status cannot be empty, do not speak up if you are not going to say anything marine.
      </b-form-invalid-feedback>

      <div class="button-div">
        <b-button variant="outline-dark" @click="sendUpdate">Send status update</b-button>
      </div>
      <b-card-group deck v-for="missionThread in missionMissionThreads" :key="missionThread.id">
        <b-card
            align="left"
            class="shadow-sm p-1 mb-1 bg-white rounded"
        >
          <b-card-title><b-avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_s7Z-F4MSCaDvQHgD6pHViWIYEhABU5uggL3aTXs9kmTw_Pu2ym48j3Q2LK2JikDYkj0&usqp=CAU"></b-avatar>  {{missionThread.sender.name}}</b-card-title>
          {{ missionThread.message }}
          <br>
          <div class="footer">
            {{missionThread.createdAt}}
          </div>
          <!-- <b-card-title v-if="userID === missionThread.sender.id">
              <b-icon-pencil-fill @click="editUpdate" :id="missionThread.id"></b-icon-pencil-fill>
          </b-card-title> -->
        </b-card>
      </b-card-group>
    </div>
    <p v-else>You must be signed in to view and post to the threads heretic.</p>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: "MissionThreads",
  props: {
    mission: Object
  },

  mounted() {
          this.fetchThreadByMissionID(this.$route.params.id);
        },

  computed: {
    ...mapState([
      'token',
      'missionMissionThreads'
    ]),
  },

  data() {
    return {
      missionThread: "",
      value: null,
    }
  },

  methods: {
    ...mapActions([
        'postThread',
        'fetchThreadByMissionID'
      ]),
      sendUpdate(){
        if(this.missionThread !== "" && this.value !== null)
          this.postThread({message: this.missionThread.message, MissionID: this.missionThread.missionThread, SoldierID: localStorage.token.id, recieved: true});
        else
          swal("Leave none blank around brother");
      },
    //   editThread(e){
    //     this.$router.push({ name: 'EditThread', params: { id: e.currentTarget.id } })
    //   }
    }

    

    
}
</script>

<style scoped>
.card {
  margin-top: 10px;
  text-align: left;
}
.card-title {
  margin-bottom: 0px;
}
.card-body {
  padding-bottom: 5px;
}
.card {
  background-color: #b32f1d;
}
.icon {
  margin: 15px 0;
}
.container-fluid {
  justify-content: center;
}
</style>