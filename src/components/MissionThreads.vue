<template>

  <div class="container-fluid">
    <h4>Mission Thread</h4>

    <div v-if="token">
      <b-form-textarea
          required
          v-model="review"
          :state = "reviewState"
          placeholder="Enter your status update..."
      ></b-form-textarea>
      <b-form-invalid-feedback id="input-live-feedback">
        Status cannot be empty, do not speak up if you are not going to say anything marine.
      </b-form-invalid-feedback>

      <div class="button-div">
        <b-button variant="outline-dark" @click="saveReview">Send status update</b-button>
      </div>
//OVDE SI STAO
      <b-card-group deck v-for="review in album.reviews" :key="review.id">
        <b-card
            align="center"
            class="shadow-sm p-1 mb-1 bg-white rounded"
        >
          <b-card-title><b-avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_s7Z-F4MSCaDvQHgD6pHViWIYEhABU5uggL3aTXs9kmTw_Pu2ym48j3Q2LK2JikDYkj0&usqp=CAU"></b-avatar></b-card-title>
          {{ messageThread.message }}
          <br>
          <div class="footer">
            {{missionThread.createdAt}}
          </div>
          <b-card-title v-if="user.id === missionThread.sender.id">
              <b-icon-pencil-fill @click="editUpdate" :id="missionThread.id"></b-icon-pencil-fill>
          </b-card-title>
        </b-card>
      </b-card-group>
    </div>
    <p v-else>You must be signed in to view and post to the threads heretic.</p>
  </div>

</template>

<script>
import {mapActions, mapState} from "vuex";
export default {
  name: "missionThreads",
  props: {
    mission: Object
  },
  computed: {
    ...mapState([
      'token'
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
        'postReview'
      ]),
      saveReview(){
        if(this.missionThread !== "" && this.value !== null)
          this.postReview({body: this.missionThread, rating: this.value, missionID: this.mission.id});
        else
          swal("Please fill in all the fields first.");
      },
      editReview(e){
        this.$router.push({ name: 'EditReview', params: { id: e.currentTarget.id } })
      }
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