import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import authentication from './modules/authentication'
import user from './modules/user'
// default router permission control
import permission from './modules/permission'

import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    authentication,
    permission,
    user
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
