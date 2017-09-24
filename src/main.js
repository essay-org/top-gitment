import Vue from 'vue'
import App from './App.vue'
import VueComment from './lib/index.js'
Vue.use(VueComment)
new Vue({
  el: '#app',
  render: h => h(App)
})