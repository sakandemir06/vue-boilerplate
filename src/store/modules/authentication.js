import Vue from 'vue'
import { login, getInfo, logout, register, getCompanies, setCompany, unSetCompany, updateProfile } from '@/api/login'
import { ACCESS_TOKEN } from '@/store/mutation-types'
import { welcome, successMessage } from '@/utils/util'

const user = {
  state: {
    blank: '',
    token: '',
    name: '',
    welcome: '',
    avatar: '',
    companies: [],
    roles: [],
    info: {},
    activeCompany: null
  },

  mutations: {
    SET_BLANK: (state, blank) => {
      state.blank = blank
    },
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, { name, welcome }) => {
      state.name = name
      state.welcome = welcome
    },
    SET_ACTIVE_COMPANY: (state, activeCompany) => {
      state.activeCompany = activeCompany
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_INFO: (state, info) => {
      state.info = info
    },
    SET_COMPANIES: (state, companies) => {
      state.companies = companies
    }
  },

  getters: {
    companies: state => state.companies
  },

  actions: {
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo)
          .then(response => {
            const result = response.data
            Vue.ls.set(ACCESS_TOKEN, result.access_token, 7 * 24 * 60 * 60 * 1000)
            commit('SET_TOKEN', result.access_token)
            resolve()
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    UpdateProfile({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_BLANK', '')
        updateProfile(data)
          .then(() => {
            successMessage()
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    Register({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_BLANK', '')
        register(data)
          .then(() => {
            resolve(data)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    GetCompanies({ commit }) {
      return new Promise((resolve, reject) => {
        getCompanies()
          .then(response => {
            const result = response.data
            commit('SET_COMPANIES', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    SetCompany({ commit }, data) {
      return new Promise((resolve, reject) => {
        setCompany(data)
          .then(response => {
            const result = response.data
            commit('SET_ACTIVE_COMPANY', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    UnSetCompany({ commit }, data) {
      return new Promise((resolve, reject) => {
        unSetCompany(data)
          .then(response => {
            const result = response.data
            commit('SET_ACTIVE_COMPANY', null)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getInfo()
          .then(response => {
            const result = response.data

            if ((result.roles && result.roles.length) || !result.active_company) {
              const role = result.roles
              commit('SET_ROLES', role)
              commit('SET_INFO', result)
            } else {
              reject(new Error('getInfo: roles must be a non-null array !'))
            }

            if (result.active_company) {
              commit('SET_ACTIVE_COMPANY', result.active_company)
            }

            commit('SET_NAME', { name: result.name, welcome: welcome() })

            resolve(response)
          })
          .catch(error => {
            reject(error)
          })
      })
    },

    Logout({ commit, state }) {
      return new Promise(resolve => {
        logout(state.token)
          .then(() => {
            resolve()
          })
          .catch(() => {
            resolve()
          })
          .finally(() => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            Vue.ls.remove(ACCESS_TOKEN)
          })
      })
    }
  }
}

export default user
