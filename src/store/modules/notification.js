/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { getNotifications, updateNotification, toggleNotification } from '@/api/notification'
import { successMessage } from '@/utils/util'

const notification = {
  namespaced: true,
  state: {
    notifications: []
  },

  mutations: {
    SET_NOTIFICATIONS: (state, notifications) => {
      state.notifications = notifications
    }
  },

  getters: {
    notifications: state => state.notifications
  },

  actions: {
    GetNotifications({ commit }, data) {
      return new Promise((resolve, reject) => {
        getNotifications(data)
          .then(response => {
            const result = response.data
            commit('SET_NOTIFICATIONS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateNotification({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateNotification(data)
          .then(response => {
            const result = response.data
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    ToggleNotification({ commit }, data) {
      return new Promise((resolve, reject) => {
        toggleNotification(data)
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

export default notification
