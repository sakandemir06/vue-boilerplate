import Vue from 'vue'
import Vuex from 'vuex'

import app from './modules/app'
import authentication from './modules/authentication'
import helper from './modules/helper'
import vehicle from './modules/vehicle'
import transition from './modules/transition'
import dashboard from './modules/dashboard'
import deposit from './modules/deposit'
import notification from './modules/notification'
import provider from './modules/provider'
import company from './modules/company'
import budget from './modules/budget'
import user from './modules/user'
// default router permission control
import permission from './modules/permission'

// dynamic router permission control (Experimental)
// import permission from './modules/async-router'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    authentication,
    permission,
    user,
    notification,
    helper,
    company,
    vehicle,
    transition,
    dashboard,
    provider,
    budget,
    deposit
  },
  state: {},
  mutations: {},
  actions: {},
  getters
})
