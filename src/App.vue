<template>
  <div id="app">
    <vue-gitment :options="options" v-if="options"></vue-gitment>
  </div>
  </div>
</template>
<script>
import VueGitment from './components/VueGitment.vue'
export default {
  data() {
    return {
      options: {
        id: 'article id',
        owner: 'Your GitHub ID',
        repo: 'The repo to store comments',
        oauth: {
          client_id: 'Your client ID', 
          client_secret: 'Your client secret',
        } 
      }
    }
  },
  components: {
    VueGitment
  }
}
</script>
<style>
	@import '~gitment/style/default.css';
</style>