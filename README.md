## 安装使用
安装  
```node
npm i top-gitment -S
```

main.js种全局引用  
```javascript
import TopGitment from 'top-gitment'
Vue.use(TopGitment)
```

在组件中配置使用  
```html
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
```


## 配置项说明
创建[oauth](https://github.com/settings/applications/new)，会得到client_id，client_secret。经测试如果你是本地调试，Authorization callback URL可以填写http://localhost:8080/

## 开源协议
MIT  
