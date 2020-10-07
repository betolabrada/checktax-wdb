import Vue from 'vue';
import '@/assets/main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import "font-awesome/css/font-awesome.min.css";
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
