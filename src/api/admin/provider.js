import { axios } from '@/utils/request'
const api = {
  Providers: '/admin/providers',
  ToggleProviders: '/admin/providers'
}

export function createProvider(parameter) {
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

export function toggleProvider(parameter) {
  return axios({
    url: api.ToggleProviders + '/' + parameter + '/toggle',
    method: 'get',
    data: parameter
  })
}

export function updateProvider(parameter) {
  return axios({
    url: api.Providers + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function createProviderLogo(data) {
  return axios({
    url: api.ToggleProviders + '/' + data.id + '/logo',
    method: 'post',
    data: data.formData
  })
}

export function deleteProviderLogo(parameter) {
  return axios({
    url: api.ToggleProviders + '/' + parameter + '/logo',
    method: 'delete',
    data: parameter
  })
}
