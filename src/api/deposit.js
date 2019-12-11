import { axios } from '@/utils/request'
const api = {
  Deposits: '/deposits'
}

export function getDeposits(parameter) {
  return axios({
    url: api.Deposits + '?' + parameter,
    method: 'get'
  })
}

export function getDeposit(parameter) {
  return axios({
    url: api.Deposits + '/' + parameter + '?include=make,model,provider',
    method: 'get',
    data: parameter
  })
}
