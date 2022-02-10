<template>
  <div>
    <h4>Mission Thread</h4>

    <div v-if="token">
      <b-form-input
        v-model="message"
        placeholder="Enter your status update..."
        @keydown.enter="onSubmit"
      ></b-form-input>

//IMAS STVARI DA ISPRAVIS OVDE I TO DOSTA
      <b-card v-for="message in image.comments" :title="message.user.name" :key="message.id">
        <b-card-text>
          {{ message.body }}
        </b-card-text>
      </b-card>
    </div>
    <p v-else>You must be signed in to leave a comment</p>
  </div>
</template>

<script>

  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Message',

    props: {
      image: Object
    },

    data() {
      return {
        message: ''
      }
    },

    computed: {
      ...mapState([
        'token'
      ])
    },

    methods: {
      ...mapActions([
        'postMessage'
      ]),

      onSubmit() {
        this.$socket.emit('message', { body: this.message, artId: this.image.objectID, token: this.token });
        this.message = '';
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
</style>