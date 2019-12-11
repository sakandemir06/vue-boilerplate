import api from './index'
import { axios } from '@/utils/request'

export function login(parameter) {
  return axios({
    url: api.Login,
    method: 'post',
    data: parameter
  })
}

export function register(parameter) {
  return axios({
    url: api.Register,
    method: 'post',
    data: parameter
  })
}

export function getCompanies() {
  return axios({
    url: api.LoginCompanies,
    method: 'get'
  })
}

export function setCompany(parameter) {
  return axios({
    url: api.Companies + '/' + parameter + '/login',
    method: 'get',
    data: parameter
  })
}

export function unSetCompany(parameter) {
  return axios({
    url: api.Companies + '/logout',
    method: 'get',
    data: parameter
  })
}

export function getInfo() {
  return axios({
    url: '/me',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function updateProfile(parameter) {
  return axios({
    url: '/profile',
    method: 'patch',
    data: parameter
  })
}

export function logout() {
  return axios({
    url: api.Logout,
    method: 'post'
  })
}
