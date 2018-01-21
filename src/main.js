// Global styles
import './global.css'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router.js'
import Vuex from 'vuex'

// Global components
import Loading from './components/GLoading'

import store from './store'

Vue.use(Vuex)

Vue.config.productionTip = false

Vue.use(Loading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
