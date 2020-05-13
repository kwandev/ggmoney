import '@babel/polyfill'
import plugin from './plugins'
import './assets/scss/index.scss'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './registerServiceWorker'

// Vue.config.productionTip = false

Vue.use(plugin)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
