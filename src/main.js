import Vue from 'vue'
import App from './App.vue'
import Create from '@/utils/create'
// import VueRouter from 'vue-router';
// Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.prototype.$Create = Create
new Vue({
  render: h => h(App),
}).$mount('#app')
