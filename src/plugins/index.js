import './sentry'
import './naver'

// bootstrap
import 'mutationobserver-shim'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vue-meta
import Meta from 'vue-meta'

// bootstrap > portal-vue
import PortalVue from 'portal-vue'

// infinite-scroll
import infiniteScroll from 'vue-infinite-scroll'

const plugins = {
  install(Vue) {
    Vue.use(BootstrapVue)
    Vue.use(BootstrapVueIcons)

    Vue.use(VueAxios, axios)

    Vue.use(Meta)

    Vue.use(PortalVue)

    Vue.use(infiniteScroll)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugins)
}

export default plugins
