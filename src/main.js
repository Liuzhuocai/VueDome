import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import router from "./router.js"
import './assets/less/web.less'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
