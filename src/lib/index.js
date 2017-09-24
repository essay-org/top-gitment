import VueComment from './VueComment.vue'
const comment = {
  install: function(Vue) {
    Vue.component(VueComment.name, VueComment)
  }
}
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(comment) 
}
export default comment