import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import vuetify from './plugins/vuetify';
import NaviBarComponents from './components/NaviBar.vue'

import VueRouter from 'vue-router'

//Vue.component('컴포넌트명',옵션)
Vue.component('NaviBar',NaviBarComponents);
Vue.use(VueRouter);
// Vue.use(router);
Vue.config.productionTip = false



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
