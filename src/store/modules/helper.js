import { getSectors, getProvinces, getCounties, getStations, getPapers } from '@/api/helper'

const helper = {
  namespaced: true,
  state: {
    sectors: [],
    provinces: [],
    counties: [],
    stations: [],
    papers: []
  },

  mutations: {
    SET_SECTORS: (state, sectors) => {
      state.sectors = sectors
    },
    SET_PROVINCES: (state, provinces) => {
      state.provinces = provinces
    },
    SET_COUNTIES: (state, counties) => {
      state.counties = counties
    },
    SET_STATIONS: (state, stations) => {
      state.stations = stations
    },
    SET_PAPERS: (state, papers) => {
      state.papers = papers
    }
  },

  getters: {
    sectors: state => state.sectors,
    provinces: state => state.provinces,
    counties: state => state.counties,
    stations: state => state.stations,
    papers: state => state.papers
  },

  actions: {
    GetSectors({ commit }, data) {
      return new Promise((resolve, reject) => {
        getSectors(data)
          .then(response => {
            const result = response.data
            commit('SET_SECTORS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetPapers({ commit }, data) {
      return new Promise((resolve, reject) => {
        getPapers(data)
          .then(response => {
            const result = response.data
            commit('SET_PAPERS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetProvinces({ commit }, data) {
      return new Promise((resolve, reject) => {
        getProvinces(data)
          .then(response => {
            const result = response.data
            commit('SET_COUNTIES', [])
            commit('SET_PROVINCES', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetStations({ commit }, data) {
      return new Promise((resolve, reject) => {
        getStations(data)
          .then(response => {
            const result = response.data
            commit('SET_STATIONS', result)
            resolve(result)
          })
          .catch(error => {
            reject(error)
          })
      })
    },
    GetCounties({ commit }, data) {
      return new Promise((resolve, reject) => {
        commit('SET_COUNTIES', [])
        getCounties(data)
          .then(response => {
            const result = response
            commit('SET_COUNTIES', result.counties)
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
