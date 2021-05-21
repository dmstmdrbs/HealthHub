import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import VeeValidate from 'vee-validate'

//Vue.component('컴포넌트명',옵션)

Vue.use(VueRouter);
// Vue.use(router);
Vue.config.productionTip = false
//이벤트버스 - AddExercise의 date -> Calendar의 date로
export const eventBus = new Vue()


new Vue({
  router,
  store,
  vuetify,
  VeeValidate,
  render: h => h(App)
}).$mount('#app')


let WorkoutList = (function(){

  function WorkoutList(date){
    this._date = date;
    this._workoutList = null;
  }

  WorkoutList.prototype.saveWorkoutList = function(exercises){
    this._workoutList = exercises;

  };

    return WorkoutDetail;
}());