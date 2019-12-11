import { axios } from '@/utils/request'
const api = {
  Company: '/admin/companies'
}

export function getCompanies(parameter) {
  return axios({
    url: api.Company + '?' + parameter,
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

export function createCompany(parameter) {
  return axios({
    url: api.Company,
    method: 'post',
    data: parameter
  })
}

export function toggleCompany(parameter) {
  return axios({
    url: api.Company + '/' + parameter + '/toggle',
    method: 'get'
  })
}

export function approveCompany(parameter) {
  return axios({
    url: api.Company + '/' + parameter + '/approve',
    method: 'get'
  })
}
