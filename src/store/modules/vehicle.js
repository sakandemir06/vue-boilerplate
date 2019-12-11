import { getVehicles, getVehicle } from '@/api/vehicle'

const helper = {
  namespaced: true,
  state: {
    vehicles: [],
    vehicle: null
  },

  mutations: {
    SET_VEHICLES: (state, vehicles) => {
      state.vehicles = vehicles
    },
    SET_VEHICLE: (state, vehicle) => {
      state.vehicle = vehicle
    }
  },

  getters: {
    vehicles: state => state.vehicles,
    vehicle: state => state.vehicle
  },

  actions: {
    GetVehicles({ commit }, data) {
      return new Promise((resolve, reject) => {
        getVehicles(data)
          .then(response => {
            const result = response
            commit('SET_VEHICLES', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetVehicle({ commit }, data) {
      return new Promise((resolve, reject) => {
        getVehicle(data)
          .then(response => {
            const result = response
            commit('SET_VEHICLE', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default helper
