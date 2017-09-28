import Vue from 'vue'
import App from './App.vue'
import TopGitment from './lib/index.js'
Vue.use(TopGitment)
new Vue({
  el: '#app',
  render: h => h(App)
})