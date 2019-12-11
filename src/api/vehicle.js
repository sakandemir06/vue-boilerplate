import { axios } from '@/utils/request'
const api = {
  Vehicles: '/vehicles',
  VehicleDetail: '/vehicles'
}

export function getVehicles(parameter) {
  return axios({
    url: api.Vehicles + '?' + parameter,
    method: 'get'
  })
}

export function getVehicle(parameter) {
  return axios({
    url: api.VehicleDetail + '/' + parameter + '?include=make,model,provider',
    method: 'get',
    data: parameter
  })
}
