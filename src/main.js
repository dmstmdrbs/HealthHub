import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import store from './store';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';

//Vue.component('컴포넌트명',옵션)

Vue.use(VueRouter);
// Vue.use(router);
Vue.config.productionTip = false;
//이벤트버스 - AddExercise의 date -> Calendar의 date로
export const eventBus = new Vue();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app');

export let user = {
  name: '은승균',
  age: '24',
  sex: '남자',
  height: '',
  weight: '',
  sqrt: '',
  bench: '',
  dead: '',
  weak: '',
  proficiency: '중급자',
};
