import { axios } from '@/utils/request'
const api = {
  Providers: '/providers'
}

export function connectProvider(parameter) {
  return axios({
    url: api.Providers,
    method: 'post',
    data: parameter
  })
}

export function getProvider(parameter) {
  return axios({
    url: api.Providers + '/' + parameter,
    method: 'post',
    data: parameter
  })
}

export function getProviders(parameter) {
  return axios({
    url: api.Providers,
    method: 'get',
    data: parameter
  })
}

export function updateProvider(parameter) {
  return axios({
    url: api.Providers + '/' + parameter.credential_id,
    method: 'patch',
    data: parameter
  })
}

export function deleteProvider(parameter) {
  return axios({
    url: api.Providers + '/' + parameter.credential_id,
    method: 'delete',
    data: parameter
  })
}
