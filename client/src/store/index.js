import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isNavigationVisible: false
  },
  mutations: {
    show(state) {
      state.isNavigationVisible = !state.isNavigationVisible;
    }
  },
  actions: {
  },
  modules: {
  }
})
