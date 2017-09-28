<template>
  <div id="app">
    <top-gitment :options="options" v-if="options"></top-gitment>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        id: 'article id', // 评论页唯一标识符
        owner: 'Your GitHub ID',// github用户名
        repo: 'The repo to store comments', // 用于存放评论的仓库
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