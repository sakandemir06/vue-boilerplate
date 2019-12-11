import { axios } from '@/utils/request'
const api = {
  Papers: '/admin/papers'
}

export function getPapers(parameter) {
  return axios({
    url: api.Papers,
    method: 'get',
    data: parameter
  })
}

export function getPaper(parameter) {
  return axios({
    url: api.Papers + '/' + parameter,
    method: 'get',
    data: parameter
  })
}

export function createPaper(parameter) {
  return axios({
    url: api.Papers,
    method: 'post',
    data: parameter
  })
}

export function updatePaper(parameter) {
  return axios({
    url: api.Papers + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deletePaper(parameter) {
  return axios({
    url: api.Papers + '/' + parameter.id,
    method: 'delete'
  })
}
