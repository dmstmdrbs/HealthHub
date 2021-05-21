import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '@/views/Login'
import MainPage from '@/views/Home'
import TodayPage from '@/views/Today'
import JoinPage from '@/views/Join'
import MyPage from '@/views/MyPageView'
import FindPasswordPage from '@/views/FindPassword'
Vue.use(VueRouter)

const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Login',
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
      },
      {
        path :'/join',
        name:'join',
        component : JoinPage
      },
      {
        path:'/find_pw',
        name:'find_pw',
        component : FindPasswordPage
      },
      {
        path:'/mypage',
        name:'mypage',
        component : MyPage
      }
    ]
  })

export default vueRouter;
