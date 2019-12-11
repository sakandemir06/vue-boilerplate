/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { connectProvider, getProvider, getProviders, updateProvider, deleteProvider } from '@/api/provider'
import { successMessage } from '@/utils/util'

const provider = {
  namespaced: true,
  state: {
    providers: [],
    provider: null
  },

  mutations: {
    SET_PROVIDERS: (state, providers) => {
      state.providers = providers
    },
    SET_PROVIDER: (state, provider) => {
      state.provider = provider
    }
  },

  getters: {
    providers: state => state.providers,
    provider: state => state.provider
  },

  actions: {
    GetProviders({ commit }, data) {
      return new Promise((resolve, reject) => {
        getProviders(data)
          .then(response => {
            const result = response.data
            commit('SET_PROVIDERS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetProvider({ commit }, data) {
      return new Promise((resolve, reject) => {
        getProvider(data)
          .then(response => {
            const result = response.data
            commit('SET_PROVIDER', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    ConnectProvider({ commit }, data) {
      return new Promise((resolve, reject) => {
        connectProvider(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateProvider({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateProvider(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    DeleteProvider({ commit }, data) {
      return new Promise((resolve, reject) => {
        deleteProvider(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default provider
