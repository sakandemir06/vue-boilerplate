import { axios } from '@/utils/request'
const api = {
  Transitions: '/transitions',
  TransitionDetail: '/transition'
}

export function getTransitions(parameter) {
  return axios({
    url: api.Transitions + '?' + parameter,
    method: 'get'
  })
}

export function getTransition(parameter) {
  return axios({
    url: api.TransitionDetail + '/' + parameter + '?include=make,model,provider',
    method: 'get',
    data: parameter
  })
}
