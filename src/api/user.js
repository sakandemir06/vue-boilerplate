import { axios } from '@/utils/request'
const api = {
  User: '/users',
  UserInvite: '/users/invite'
}

export function getUsers(parameter) {
  return axios({
    url: api.User,
    method: 'get',
    data: parameter
  })
}

export function getUser(parameter) {
  return axios({
    url: api.User + '/' + parameter,
    method: 'get',
    data: parameter
  })
}

export function createUser(parameter) {
  return axios({
    url: api.User,
    method: 'post',
    data: parameter
  })
}

export function updateUser(parameter) {
  return axios({
    url: api.User + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function deleteUser(parameter) {
  return axios({
    url: api.User + '/' + parameter,
    method: 'delete'
  })
}

export function inviteUser(parameter) {
  return axios({
    url: api.UserInvite + '?' + parameter,
    method: 'get',
    data: parameter
  })
}
