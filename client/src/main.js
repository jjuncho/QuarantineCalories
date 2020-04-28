import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router';
import router from "./router.js";

import axios from "axios";

// Adding bootstrap to the project
// See https://bootstrap-vue.js.org/ for inormation and docs
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueRouter);
Vue.use(axios);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
