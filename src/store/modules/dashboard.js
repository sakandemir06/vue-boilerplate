/* eslint-disable no-unused-vars */
import Vue from 'vue'
import {
  getAverageBudgetUsage,
  getTransitionTotalsByMonth,
  getTransitionsByMonth,
  getTransitionsByPeriod,
  getTransitionsByPeriodAndVehicle,
  getTransitionsExpenditureByPeriod,
  getTransitionsExpenditureByPeriodAndVehicle,
  getAverageTransitionAmountsByMonth
} from '@/api/dashboard'

const dashboard = {
  namespaced: true,
  state: {
    averageBudgetUsage: null,
    transitionTotalsByMonth: null,
    transitionsByMonth: null,
    transitionsByPeriod: null,
    transitionsByPeriodAndVehicle: null,
    transitionsExpenditureByPeriod: null,
    transitionsExpenditureByPeriodAndVehicle: null,
    averageTransitionAmountsByMonth: null
  },

  mutations: {
    SET_AVERAGE_BUDGET_USAGE: (state, averageBudgetUsage) => {
      state.averageBudgetUsage = averageBudgetUsage
    },
    SET_AVERAGE_TRANSITION_AMOUNTS_BY_MONTH: (state, averageTransitionAmountsByMonth) => {
      state.averageTransitionAmountsByMonth = averageTransitionAmountsByMonth
    },
    SET_TRANSITION_TOTALS_BY_MONTH: (state, transitionTotalsByMonth) => {
      state.transitionTotalsByMonth = transitionTotalsByMonth
    },
    SET_TRANSITIONS_BY_MONTH: (state, transitionsByMonth) => {
      state.transitionsByMonth = transitionsByMonth
    },
    SET_TRANSITIONS_BY_PERIOD: (state, transitionsByPeriod) => {
      state.transitionsByPeriod = transitionsByPeriod
    },
    SET_TRANSITIONS_BY_PERIOD_AND_VEHICLE: (state, transitionsByPeriodAndVehicle) => {
      state.transitionsByPeriodAndVehicle = transitionsByPeriodAndVehicle
    },
    SET_TRANSITIONS_EXPENDITURE_BY_PERIOD: (state, transitionsExpenditureByPeriod) => {
      state.transitionsExpenditureByPeriod = transitionsExpenditureByPeriod
    },
    SET_TRANSITIONS_EXPENDITURE_BY_PERIOD_AND_VEHICLE: (state, transitionsExpenditureByPeriodAndVehicle) => {
      state.transitionsExpenditureByPeriodAndVehicle = transitionsExpenditureByPeriodAndVehicle
    }
  },

  getters: {
    averageBudgetUsage: state => state.averageBudgetUsage,
    transitionTotalsByMonth: state => state.transitionTotalsByMonth,
    averageTransitionAmountsByMonth: state => state.averageTransitionAmountsByMonth,
    transitionsByMonth: state => state.transitionsByMonth,
    transitionsByPeriod: state => state.transitionsByPeriod,
    transitionsByPeriodAndVehicle: state => state.transitionsByPeriodAndVehicle,
    transitionsExpenditureByPeriod: state => state.transitionsExpenditureByPeriod,
    transitionsExpenditureByPeriodAndVehicle: state => state.transitionsExpenditureByPeriodAndVehicle
  },

  actions: {
    GetAverageBudgetUsage({ commit }, data) {
      return new Promise((resolve, reject) => {
        getAverageBudgetUsage(data)
          .then(response => {
            const result = response.data
            commit('SET_AVERAGE_BUDGET_USAGE', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetAverageTransitionAmountsByMonth({ commit }, data) {
      return new Promise((resolve, reject) => {
        getAverageTransitionAmountsByMonth(data)
          .then(response => {
            const result = response.data
            commit('SET_AVERAGE_TRANSITION_AMOUNTS_BY_MONTH', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionTotalsByMonth({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionTotalsByMonth(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITION_TOTALS_BY_MONTH', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionsByMonth({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionsByMonth(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITIONS_BY_MONTH', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionsByPeriod({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionsByPeriod(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITIONS_BY_PERIOD', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionsByPeriodAndVehicle({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionsByPeriodAndVehicle(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITIONS_BY_PERIOD_AND_VEHICLE', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionsExpenditureByPeriod({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionsExpenditureByPeriod(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITIONS_EXPENDITURE_BY_PERIOD', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetTransitionsExpenditureByPeriodAndVehicle({ commit }, data) {
      return new Promise((resolve, reject) => {
        getTransitionsExpenditureByPeriodAndVehicle(data)
          .then(response => {
            const result = response.data
            commit('SET_TRANSITIONS_EXPENDITURE_BY_PERIOD_AND_VEHICLE', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default dashboard
