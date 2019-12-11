import { axios } from '@/utils/request'
const api = {
  Stations: '/admin/stations',
  Nickname: '/admin/station-nicknames'
}

export function getStations(parameter) {
  return axios({
    url: api.Stations + '?' + parameter,
    method: 'get',
    data: parameter
  })
}

export function getStation(parameter) {
  return axios({
    url: api.Stations + '/' + parameter,
    method: 'get'
  })
}

export function createStation(parameter) {
  return axios({
    url: api.Stations,
    method: 'post',
    data: parameter
  })
}

export function updateStation(parameter) {
  return axios({
    url: api.Stations + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deleteStation(parameter) {
  return axios({
    url: api.Stations + '/' + parameter.id,
    method: 'delete'
  })
}

export function createStationNickname(parameter) {
  return axios({
    url: api.Nickname,
    method: 'post',
    data: parameter
  })
}

export function updateStationNickname(parameter) {
  return axios({
    url: api.Nickname + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deleteStationNickname(parameter) {
  return axios({
    url: api.Nickname + '/' + parameter,
    method: 'delete'
  })
}
