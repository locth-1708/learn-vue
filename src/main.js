import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './routes';
import store from './store/index';

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
