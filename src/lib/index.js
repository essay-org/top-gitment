import TopGitment from './TopGitment.vue'
const comment = {
  install: function(Vue) {
    Vue.component(TopGitment.name, TopGitment)
  }
}
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(comment) 
}
export default comment