const store = {

	namespaced: true,
	
	state: { open: [], temp: [] },
	
	getters: {
		allOpen: (state) => state.open,
		active:  (state) => (state.open.length > 0 ? state.open[0] : null),
		current: (state) => (state.open.length > 0 ? { id: state.open[0], temp: state.temp[0] } : null)
	},

	actions: { 
		open:  ({ commit }, payload) => commit('OPEN', payload),
		close: ({ commit }, payload) => commit('CLOSE', payload),
	},

	mutations: {
		OPEN:  (state, payload) => { state.open.unshift(payload.id || payload), state.temp.unshift(payload.temp || {}) },
		CLOSE: (state, payload) => { const index = state.open.findIndex(i => i === payload); state.open = state.open.filter((e, i) => i !== index), state.temp = state.temp.filter((e, i) => i !== index), document.body.classList.remove('is-nav-open') },
	}
}

export default store