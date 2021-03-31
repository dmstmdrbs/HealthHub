import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/Login'
import MainPage from '../Home'
import TodayPage from '@/views/Today'
Vue.use(VueRouter)

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'login',
      component: LoginPage
      },
      {
        path: '/home',
        name: 'home',
        component: MainPage
      },
      {
        path:'/today',
        name:'today',
        component: TodayPage
      }
    ]
  })

export default vueRouter;
