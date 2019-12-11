/* eslint-disable no-unused-vars */
import Vue from 'vue'
import { getUser, getUsers, createUser, updateUser, deleteUser, inviteUser } from '@/api/user'
import { successMessage } from '@/utils/util'

const user = {
  namespaced: true,
  state: {
    users: [],
    user: null
  },

  mutations: {
    SET_USERS: (state, users) => {
      state.users = users
    },
    SET_USER: (state, paper) => {
      state.user = user
    }
  },

  getters: {
    users: state => state.users,
    user: state => state.user,
    userRoles() {
      return [
        {
          name: 'Filo Yöneticisi',
          value: 'manager'
        },
        {
          name: 'Raporlama Sorumlusu',
          value: 'reporting'
        }
      ]
    }
  },

  actions: {
    GetUsers({ commit }, data) {
      return new Promise((resolve, reject) => {
        getUsers(data)
          .then(response => {
            const result = response
            commit('SET_USERS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        getUser(data)
          .then(response => {
            const result = response.data
            commit('SET_USER', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    CreateUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        createUser(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        updateUser(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    DeleteUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        deleteUser(data)
          .then(response => {
            successMessage()
            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    InviteUser({ commit }, data) {
      return new Promise((resolve, reject) => {
        inviteUser(data)
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

export default user
