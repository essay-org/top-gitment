### 安装使用
安装  
`npm i vue-gitment -S`

main.js种全局引用  
```javascript
import VueGitment from 'vue-gitment'
Vue.use(VueGitment)
```

在组件中配置使用  
```html
<template>
  <div id="app">
    <vue-comment :options="options" v-if="options"></vue-comment>
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
```

### 配置项说明
创建[oauth](https://github.com/settings/applications/new)，会得到client_id，client_secret。经测试如果你是本地调试，Authorization callback URL可以填写http://localhost:8080/

### 开源协议
MIT  
