/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { getBudget, getBudgets, createBudget, updateBudget, deleteBudget } from '@/api/budget'
import { successMessage } from '@/utils/util'
const budget = {
  namespaced: true,
  state: {
    budgets: [],
    budget: null
  },

  mutations: {
    SET_BUDGETS: (state, budgets) => {
      state.budgets = budgets
    },
    SET_BUDGET: (state, budget) => {
      state.budget = budget
    }
  },

  getters: {
    budgets: state => state.budgets,
    budget: state => state.budget
  },

  actions: {
    GetBudgets({ commit }, data) {
      return new Promise((resolve, reject) => {
        getBudgets(data)
          .then(response => {
            const result = response.data
            commit('SET_BUDGETS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetBudget({ commit }, data) {
      return new Promise((resolve, reject) => {
        getBudget(data)
          .then(response => {
            const result = response.data
            commit('SET_BUDGET', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    CreateBudget({ commit }, data) {
      return new Promise((resolve, reject) => {
        createBudget(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateBudget({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateBudget(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    DeleteBudget({ commit }, data) {
      return new Promise((resolve, reject) => {
        deleteBudget(data)
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

export default budget
