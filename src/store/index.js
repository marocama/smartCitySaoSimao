import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals'
import router from '@/router'
import { auth, UsersColl } from '@/firebase'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: { modals },

  state: {
    user: {},
    next: '',
    loading: false,
    mobile: window.innerWidth < 640,
    window: { width: window.innerWidth, height: window.innerHeight }
  },
   
  mutations: {
    setUser(state, payload) { state.user = payload },
    setNext(state, payload) { state.next = payload },
    setLoading(state, payload) { state.loading = payload },
    setWindow(state, payload) { state.window = payload, state.mobile = payload.width < 640 },
  },
   
  actions: {
    async logout({ commit }) {
      if (!this.state.loading) commit('setLoading', true)
      await auth.signOut()
      .then(() => { 
        commit('setUser', {})
        if (router.currentRoute.path !== '/') { router.push('/') } 
        this.$toast.success('Você se deslogou, até breve')
      }).catch(() => this.$toast.error('Ocorreu um erro, tente novamente'))
      if (this.state.loading) commit('setLoading', false)
    },
    
    async fetchUserProfile({ commit }) {          
      if (!auth.currentUser) { return }  
      if (!this.state.loading) commit('setLoading', true)
      await UsersColl.doc(auth?.currentUser?.uid).get().then(async result => {
        if (result.exists) { // Conta existente
          commit('setUser', result.data())
          if (this.state.loading) commit('setLoading', false)
          if (this.state.next !== '') { router.push(this.state.next), commit('setNext', '') }
        } else { // Conta não registrada 
          commit('setCommand', 'processing')
          if (this.state.loading) commit('setLoading', false)
          await UsersColl.doc(auth?.currentUser?.uid).set({ Name: this.state?.user?.Name || '' })
          .then(() => {
            commit('setCommand', 'registered')
            this.dispatch('fetchUserProfile')
          })
          .catch(err => this.$toast.error(err.response?.data?.message || 'Ocorreu um erro, tente novamente')) 
        }
      })
      .catch(() => this.$toast.error('Falha ao carregar, tente novamente'))
      if (this.state.loading) commit('setLoading', false)
    }
   }
})