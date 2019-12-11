/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { getCompanies, getCompany, updateCompany } from '@/api/company'
import { successMessage } from '@/utils/util'

const provider = {
  namespaced: true,
  state: {
    companies: [],
    company: null
  },

  mutations: {
    SET_COMPANIES: (state, companies) => {
      state.companies = companies
    },
    SET_COMPANY: (state, company) => {
      state.company = company
    }
  },

  getters: {
    companies: state => state.companies,
    company: state => state.company
  },

  actions: {
    GetCompanies({ commit }, data) {
      return new Promise((resolve, reject) => {
        getCompanies(data)
          .then(response => {
            const result = response
            commit('SET_COMPANIES', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetCompany({ commit }, data) {
      return new Promise((resolve, reject) => {
        getCompany(data)
          .then(response => {
            const result = response.data
            commit('SET_COMPANY', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateCompany({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateCompany(data)
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
