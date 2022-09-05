import Vue from 'vue'
import Vuex from 'vuex'
import modals from './modals'
import router from '@/router'
import { auth, firebase, UsersColl } from '@/firebase'

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
      .then(() => { commit('setUser', {}); if (router.currentRoute.path !== '/') { router.push('/') } commit('setToast', { type: 'success', title: 'Sucesso', message: 'Você se deslogou, até breve.' }) })
      .catch(() => commit('setToast', { type: 'error', title: 'Erro', message: 'Ocorreu um erro, tente novamente.' }) )
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
          
          this.state.listeners.push(await UsersColl.doc(auth.currentUser.uid).collection('Notifications').where('Active', '==', true).orderBy('CreatedAt', 'desc').limit(6).onSnapshot(snapshot => { const notificationsArray = []; snapshot.forEach(doc => { notificationsArray.push({ id: doc.id, ...doc.data() }) }), commit('setNotifications', notificationsArray) }))
          await UsersColl.doc(auth.currentUser.uid).collection('Private').doc('Favorites').get().then(items => { if (items.exists) { commit('setFavorites', items.data().Available) }}).catch(() => {})
          if (firebase.messaging.isSupported()) {
            await firebase.messaging().getToken({ vapidKey: 'BM7MQIeIoJPo4oGZm7cwcPl5UsvD3AqEVM7xjLmRvOY9ZyaYnUhgE_1yQPq9D1WVZy4lS_hhU8sjJAHAMwu8oGI' }).then(async result => { await UsersColl.doc(auth.currentUser.uid).collection('Private').doc('Devices').set({ Tokens: firebase.firestore.FieldValue.arrayUnion(result) }, { merge: true }) }).catch(() => {}) 
          }
        } else { // Conta não registrada 
          commit('setCommand', 'processing')
          if (this.state.loading) commit('setLoading', false)
          await Users().register(auth?.currentUser?.displayName || this.state?.user?.Name || '', auth?.currentUser?.photoURL || this.state?.user?.Avatar || '', this.state?.user?.Document || '', this.state?.user?.Creci || false, this.state?.user?.Load || false)
          .then(() => {
            commit('setCommand', 'registered')
            this.dispatch('fetchUserProfile')
          })
          .catch(err => commit('setToast', { type: 'error', title: err.response?.data?.code ? `Erro: ${err.response?.data?.code}` : 'Erro', message: err.response?.data?.message || 'Ocorreu um erro, tente novamente.' })) 
        }
      })
      .catch((err) => { console.log("Erro store", err), commit('setToast', { type: 'error', title: 'Erro', message: 'Falha ao carregar, tente novamente.' }) })
      if (this.state.loading) commit('setLoading', false)
    }
   }
})