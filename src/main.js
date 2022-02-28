import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import vuetify from "./plugins/vuetify"
import SmoothScrollbar from "vue-smooth-scrollbar"
import VueMeta from "vue-meta"
import Vuesax from "vuesax"
import "./vuesax.css"
import AxiosPlugin from "vue-axios-cors"
import VueCookies from "vue-cookies"

Vue.use(VueCookies)
Vue.use(AxiosPlugin)
Vue.use(Vuesax)
Vue.use(SmoothScrollbar)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true,
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app")
