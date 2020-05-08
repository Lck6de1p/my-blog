import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
