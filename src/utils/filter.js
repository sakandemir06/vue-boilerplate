import Vue from 'vue'
import { moment } from './localization'

Vue.filter('NumberFormat', function(value) {
  if (!value) {
    return '0'
  }
  const intPartFormat = value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,') // 将整数部分逢三一断
  return intPartFormat
})

Vue.filter('dayjs', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('moment', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)
})

Vue.filter('timeStampToDate', function(dataStr, pattern = 'DD.MM.YYYY') {
  return moment.unix(dataStr).format(pattern)
})

Vue.filter('timeStampToDateTime', function(dataStr, pattern = 'DD.MM.YYYY HH:mm') {
  return moment.unix(dataStr).format(pattern)
})

Vue.filter('toCurrency', function(number, decPlaces, decSep, thouSep) {
  ;(decPlaces = isNaN((decPlaces = Math.abs(decPlaces))) ? 2 : decPlaces),
    (decSep = typeof decSep === 'undefined' ? '.' : decSep)
  thouSep = typeof thouSep === 'undefined' ? ',' : thouSep
  var sign = number < 0 ? '-' : ''
  var i = String(parseInt((number = Math.abs(Number(number) || 0).toFixed(decPlaces))))
  var j = (j = i.length) > 3 ? j % 3 : 0

  let data =
    sign +
    (j ? i.substr(0, j) + thouSep : '') +
    i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, '$1' + thouSep) +
    (decPlaces
      ? decSep +
        Math.abs(number - i)
          .toFixed(decPlaces)
          .slice(2)
      : '')
  return '₺' + data
})

Vue.filter('toLowerCaseTurkish', value => {
  if (value) {
    var letters = { İ: 'i', I: 'ı', Ş: 'ş', Ğ: 'ğ', Ü: 'ü', Ö: 'ö', Ç: 'ç' }
    value = value.replace(/(([İIŞĞÜÇÖ]))/g, function(letter) {
      return letters[letter]
    })
    return value.toLowerCase()
  }
})
