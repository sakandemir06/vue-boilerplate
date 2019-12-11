import { axios } from '@/utils/request'
const api = {
  Sectors: '/sectors',
  Provinces: '/provinces-counties',
  Stations: '/stations',
  Papers: '/papers'
}

export function getSectors(parameter) {
  return axios({
    url: api.Sectors,
    method: 'get',
    data: parameter
  })
}

export function getStations(parameter) {
  return axios({
    url: api.Stations,
    method: 'get',
    data: parameter
  })
}

export function getProvinces(parameter) {
  return axios({
    url: api.Provinces,
    method: 'get',
    data: parameter
  })
}

export function getPapers(parameter) {
  return axios({
    url: api.Papers,
    method: 'get',
    data: parameter
  })
}

export function getCounties(parameter) {
  return axios({
    url: api.Provinces + '/' + parameter,
    method: 'get',
    data: parameter
  })
}
