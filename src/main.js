import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Appear from '@/components/Appear'
Vue.component('Appear', Appear)

import AppearDirective from '@/directives/appear'
Vue.directive('appear', AppearDirective);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
