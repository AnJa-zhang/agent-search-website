import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import home from './home.vue'

// Vue.use(VueRouter)

// const routes = [
//   { path: '/', component: App },
//   { path: '/home', component: home }
// ]

// const router = new VueRouter({
// 	routes
// })

new Vue({
  el: '#app',
  render: h => h(App)
})
