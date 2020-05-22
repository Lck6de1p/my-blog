import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/reset.css'
import '@/assets/css/main.css'
import '@/assets/iconfont/iconfont.css'
import router from './router'
import store from './store'
import Router from 'vue-router'

Vue.config.productionTip = false
// 解决vue-router跳转不是promise的报错

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

new Vue({
	render: h => h(App),
	router,
	store
}).$mount('#app')
