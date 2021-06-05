import Vue from 'vue';
import VueRouter from 'vue-router';
import LoginPage from '@/views/Login';
import MainPage from '@/views/Home';
import JoinPage from '@/views/Join';
import MyPage from '@/views/MyPageView';
import UserInfoPage from '@/views/UserInfo';
import FindPasswordPage from '@/views/FindPassword';
Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err;
  });
};
const vueRouter = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/home',
      name: 'home',
      component: MainPage,
    },
    {
      path: '/join',
      name: 'join',
      component: JoinPage,
    },
    {
      path: '/join/userinfo',
      name: 'join/userinfo',
      component: UserInfoPage,
    },
    {
      path: '/find_pw',
      name: 'find_pw',
      component: FindPasswordPage,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPage,
    },
  ],
});

export default vueRouter;
