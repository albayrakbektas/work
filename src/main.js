import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueAgile from 'vue-agile'
import CountryFlag from 'vue-country-flag'

Vue.component('country-flag', CountryFlag)

Vue.use(VueAgile)


Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
