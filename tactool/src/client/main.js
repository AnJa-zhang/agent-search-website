import Vue from 'vue'
import VueRouter from 'vue-router'

//组件列表
import App from './App.vue'
import home from './home.vue'

Vue.use(VueRouter)

const routes = [
{
	path:'/', component: App,
},
{
	path:'/home',component : home
}]

const router = new VueRouter({
	routes
})

const app = new Vue({
  router
}).$mount('#app')
