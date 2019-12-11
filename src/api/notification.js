import { axios } from '@/utils/request'
const api = {
  Notifications: '/notifications'
}

export function getNotifications(parameter) {
  return axios({
    url: api.Notifications,
    method: 'get',
    data: parameter
  })
}

export function updateNotification(parameter) {
  return axios({
    url: api.Notifications + '/' + parameter.id,
    method: 'patch',
    data: parameter
  })
}

export function toggleNotification(parameter) {
  return axios({
    url: api.Notifications + '/' + parameter.id + '/toggle',
    method: 'get',
    data: parameter
  })
}
