import Vue from 'vue'
import Vuex from 'vuex'

import moduleList from './list'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
  },
  actions: {
  },
  mutations: {
  },
  getters: {
  },
  modules: {
    list: moduleList
  }
})

export default store
