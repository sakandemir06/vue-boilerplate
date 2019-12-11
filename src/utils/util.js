/* eslint-disable no-prototype-builtins */
import Vue from 'vue'

export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}

export function successMessage(message = 'Başarılı') {
  Vue.prototype.$message.success(message)
}

export function toLowerCaseTurkish(value) {
  if (value) {
    var letters = { İ: 'i', I: 'ı', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç' }
    value = value.replace(/(([İIŞĞÜÇÖ]))/g, function(letter) {
      return letters[letter]
    })
    return value.toLowerCase()
  }
}

export function filterOption(input, option) {
  return toLowerCaseTurkish(option.componentOptions.children[0].text).indexOf(toLowerCaseTurkish(input)) >= 0
}

export function handleErrors(e) {
  if (e.response.status === 401) {
    localStorage.removeItem('token')
    location.href = '/'
  }
  let errors = []
  const errorTitle = 'Hata!'
  if ('errors' in e.response.data) {
    errors = e.response.data.errors
  } else {
    errors = e.response.data.message
  }
  if (!errors) {
    errors = e.response.data.error.message
  }
  if (errors) {
    if (typeof errors === 'string') {
      Vue.prototype.$notification.error({
        message: errorTitle,
        description: errors
      })
    } else {
      errors = Object.values(errors).map(value => value)
      if (errors.length) {
        for (let i = 0; i < errors.length; i++) {
          if (typeof errors[i] === 'string') {
            Vue.prototype.$notification.error({
              message: errorTitle,
              description: errors[i]
            })
          } else if (errors[i].length > 0) {
            for (let j = 0; j < errors[i].length; j++) {
              Vue.prototype.$notification.error({
                message: errorTitle,
                description: errors[i][j]
              })
            }
          }
        }
      }
    }
  }
}

export function triggerWindowResizeEvent() {
  const event = document.createEvent('HTMLEvents')
  event.initEvent('resize', true, true)
  event.eventType = 'message'
  window.dispatchEvent(event)
}

export function querySerialize(obj, baseObject = null, str = []) {
  // eslint-disable-next-line no-prototype-builtins
  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      if (typeof obj[p] === 'object') {
        querySerialize(obj[p], p, str)
      } else {
        if (baseObject) {
          if (obj[p]) {
            str.push(encodeURIComponent(baseObject) + '[' + p + ']' + '=' + encodeURIComponent(obj[p]))
          }
        } else {
          if (obj[p]) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
          }
        }
      }
    }
  }
  return str.join('&')
}

export function checkNestedObjects(obj, isEmpty = true) {
  if (isEmpty) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (typeof obj[p] === 'object') {
          isEmpty = checkNestedObjects(obj[p])
        } else {
          if (obj[p]) {
            isEmpty = false
          }
        }
      }
    }
  }
  return isEmpty
}

export function handleScrollHeader(callback) {
  let timer = 0

  let beforeScrollTop = window.pageYOffset
  callback = callback || function() {}
  window.addEventListener(
    'scroll',
    () => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        let direction = 'up'
        const afterScrollTop = window.pageYOffset
        const delta = afterScrollTop - beforeScrollTop
        if (delta === 0) {
          return false
        }
        direction = delta > 0 ? 'down' : 'up'
        callback(direction)
        beforeScrollTop = afterScrollTop
      }, 50)
    },
    false
  )
}

Vue.prototype.$filterOption = filterOption
Vue.prototype.$querySerialize = querySerialize
Vue.prototype.$checkNestedObjects = checkNestedObjects
