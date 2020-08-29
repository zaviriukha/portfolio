import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
import VueAnimateOnScroll from 'vue-animate-onscroll'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
Vue.use(VueAnimateOnScroll)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
