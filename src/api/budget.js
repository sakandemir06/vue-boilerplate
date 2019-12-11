import { axios } from '@/utils/request'
const api = {
  Budget: '/budgets'
}

export function getBudgets(parameter) {
  return axios({
    url: api.Budget,
    method: 'get',
    data: parameter
  })
}

export function getBudget(parameter) {
  return axios({
    url: api.Budgets + '/' + parameter,
    method: 'get',
    data: parameter
  })
}

export function createBudget(parameter) {
  return axios({
    url: api.Budget,
    method: 'post',
    data: parameter
  })
}

export function updateBudget(parameter) {
  return axios({
    url: api.Budget + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deleteBudget(parameter) {
  return axios({
    url: api.Budget + '/' + parameter,
    method: 'delete'
  })
}
