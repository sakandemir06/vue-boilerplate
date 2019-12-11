import { axios } from '@/utils/request'
const api = {
  Company: '/companies'
}

export function getCompanies(parameter) {
  return axios({
    url: api.Company,
    method: 'get',
    data: parameter
  })
}

export function getCompany(parameter) {
  return axios({
    url: api.Company + '/' + parameter,
    method: 'get',
    data: parameter
  })
}

export function updateCompany(parameter) {
  return axios({
    url: api.Company + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}
