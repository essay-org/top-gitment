<template>
  <div id="app">
    <vue-comment :options="options" v-if="options"></vue-comment>
  </div>
  </div>
</template>
<script>
export default {
  name: 'App',
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
  }
}
</script>
<style>
	@import '~gitment/style/default.css';
</style>