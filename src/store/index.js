import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { modals },
  state: {
    mobile: window.innerWidth < 640,
    window: { width: window.innerWidth, height: window.innerHeight }
  },

  mutations: {
    setWindow(state, payload) { state.window = payload, state.mobile = payload.width < 640 },
  },
})
