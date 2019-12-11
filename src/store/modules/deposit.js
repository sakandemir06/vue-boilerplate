import { getDeposits, getDeposit } from '@/api/deposit'

const deposit = {
  namespaced: true,
  state: {
    deposits: [],
    deposit: null
  },

  mutations: {
    SET_DEPOSITS: (state, deposits) => {
      state.deposits = deposits
    },
    SET_DEPOSIT: (state, deposit) => {
      state.deposit = deposit
    }
  },

  getters: {
    deposits: state => state.deposits,
    deposit: state => state.deposit
  },

  actions: {
    GetDeposits({ commit }, data) {
      return new Promise((resolve, reject) => {
        getDeposits(data)
          .then(response => {
            const result = response
            commit('SET_DEPOSITS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetDeposit({ commit }, data) {
      return new Promise((resolve, reject) => {
        getDeposit(data)
          .then(response => {
            const result = response
            commit('SET_DEPOSIT', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default deposit
