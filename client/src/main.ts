import Vue from 'vue';
import '@/assets/main.css';
import App from './App.vue';
import router from './router';
import store from './store';
import Axios from 'axios';

Vue.config.productionTip = false;
Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.default.token}`;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
