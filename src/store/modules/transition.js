import { getTransitions, getTransition } from '@/api/transition'

const helper = {
  namespaced: true,
  state: {
    transitions: [],
    transition: null
  },

  mutations: {
    SET_TRANSITIONS: (state, transitions) => {
      state.transitions = transitions
    },
    SET_TRANSITION: (state, transition) => {
      state.transition = transition
    }
  },

  getters: {
    transitions: state => state.transitions,
    transition: state => state.transition
  },

  actions: {
    GetTransitions({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitions(data)
          .then(response => {
            const result = response
            commit('SET_TRANSITIONS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransition({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransition(data)
          .then(response => {
            const result = response
            commit('SET_TRANSITION', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default helper
