import Vue from 'vue'
import App from './App.vue'

// Adding bootstrap to the project
// See https://bootstrap-vue.js.org/ for inormation and docs
import { BootstrapVue } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
