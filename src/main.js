import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueScrollTo from 'vue-scrollto'
// import VueAnimateOnScroll from 'vue-animate-onscroll'
import AOS from 'aos';
import 'aos/dist/aos.css'

Vue.config.productionTip = false

Vue.use(VueScrollTo)
// Vue.use(VueAnimateOnScroll)
// Vue.use(AOS)
// Vue.directive('aos', AOS);

new Vue({
  router,
  store,
  created () {
    AOS.init()
  },
  render: h => h(App)
}).$mount('#app')
