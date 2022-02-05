<template>
  <div id="app">
    <Header subtitle="Squads"/>
    <div class="row">
      <div class="column">
        <img alt="horizontal-drapery" width="750" src="https://pbs.twimg.com/media/EnxljX5W8AACAW2.jpg">
      </div>
      <div class="column">

      </div>
    </div>
    
    
    <ImageList v-if="imageIDs" :objects="imageIDs" />
  </div>
</template>

<script>
  import Header from '@/components/Header.vue';
  // import ImageList from '@/components/ImageList.vue';

  export default {
    name: 'Squads',
    
    components: {
      Header,
      // ImageList
    },

    data() {
        return {
            subtitle: '',
            depID: null,
            imageIDs: null
        }
    },

    watch: {
      $route() {
        this.subtitle = this.$route.params.name;
        this.depID = this.$route.params.id;

      }
    },

    mounted() {
        this.subtitle = this.$route.params.name;
        this.depID = this.$route.params.id;

        fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=${this.depID}`)
            .then( obj => obj.json() )
            .then( res => this.imageIDs = res.objectIDs );
    }
  }
</script>

<style scoped>
  .column {
    float: left;
    width: 33.33%;
    padding: 5px;
  }

  /* Clear floats after image containers */
  .row::after {
    content: "";
    clear: both;
    display: table;
  }
</style>
