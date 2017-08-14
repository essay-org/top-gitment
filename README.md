### vueblog评论插件
评论插件基于[gitment](https://github.com/imsun/gitment)封装，由于此插件比较简单，所以就没有封装成npm包

### 开启评论功能
我在vueblog中已经集成了该组件，你若想开启评论功能，只需三步
1. `npm i gitment -S`
2. 配置/components/global/MyComment.vue组件
3. 打开/components/global/Article.vue
把`<!-- <my-comment :id="article.date"></my-comment> -->`中的注释关闭

### 配置MyComment.vue组件
1. 创建[oauth](https://github.com/settings/applications/new)，会得到client_id，client_secret。  
经测试如果你是本地调试，`Authorization callback URL`可以填写http://localhost:8080/本地地址
2. 配置MyComment.vue中的oauth
```
owner: 'Your GitHub ID',// eg: wmui
repo: 'The repo to store comments', // eg: comment
oauth: {
    client_id: 'Your client ID', 
    client_secret: 'Your client secret',
},
```
3. 完成以上操作，初始化评论
![](https://github.com/vue-blog/vb-comment/tree/master/demo/01.png)
