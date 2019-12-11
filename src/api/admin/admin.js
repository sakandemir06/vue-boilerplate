import { axios } from '@/utils/request'
const api = {
  User: 'admin/admins'
}

export function getAdmins(parameter) {
  return axios({
    url: api.User,
    method: 'get',
    data: parameter
  })
}

export function getAdmin(parameter) {
  return axios({
    url: api.User + '/' + parameter,
    method: 'get',
    data: parameter
  })
}

export function createAdmin(parameter) {
  return axios({
    url: api.User,
    method: 'post',
    data: parameter
  })
}

export function updateAdmin(parameter) {
  return axios({
    url: api.User + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deleteAdmin(parameter) {
  return axios({
    url: api.User + '/' + parameter,
    method: 'delete'
  })
}

export function toggleAdmin(parameter) {
  return axios({
    url: api.User + '/' + parameter + '/toggle',
    method: 'get',
    data: parameter
  })
}
