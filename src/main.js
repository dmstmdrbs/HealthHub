import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import vuetify from './plugins/vuetify';
import NaviBarComponents from './components/NaviBar.vue'
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router'

//Vue.component('컴포넌트명',옵션)

Vue.use(VueRouter);
// Vue.use(router);
Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  VeeValidate,
  render: h => h(App)
}).$mount('#app')
