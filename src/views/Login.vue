<template>
  <div id="app" class="container-fluid">
    <Header subtitle="Log In"/>

    <b-form @submit="onSubmit">
      <b-form-group label="Soldier Tag:" label-for="tag">
        <b-form-input id="tag" v-model="form.tag" placeholder="Enter tag" required></b-form-input>
      </b-form-group>

      <b-form-group label="Password:" label-for="password">
        <b-form-input id="password" v-model="form.password" type="password" required></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="dark">Submit</b-button>
    </b-form>
  </div>
</template>

<script>

  import Header from '@/components/Header.vue';
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    
    components: {
      Header
    },

    data() {
      return {
        form: {
          tag: '',
          password: ''
        }
      }
    },

    methods: {
      ...mapActions([
        'login'
      ]),

      onSubmit(e) {
        e.preventDefault();

        this.login(this.form);
        this.$router.push({ name: 'Home' });
      }
    }
  }
</script>

<style scoped>
    .container-fluid {
        max-width: 1000px;
    }
</style>
