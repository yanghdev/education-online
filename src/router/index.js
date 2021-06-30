import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import HomePage from '../components/yanghao/HomePage.vue'
import Begin from '../views/Begin.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/begin',
    name: 'begin',
    component: Begin,
    redirect:'/begin/homePage',
    children:[
      {
        path: 'homePage',
        name: 'HomePage',
        component: HomePage,
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  { path: '/', redirect: '/login' }
]

const router = new VueRouter({
  routes
})

export default router
