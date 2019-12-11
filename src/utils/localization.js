import Vue from 'vue'

import moment from 'moment'
import 'moment/locale/tr'

moment.locale('tr')

import VueI18n from 'vue-i18n'

import en from '@/translations/en.json'
import tr from '@/translations/tr.json'

Vue.use(VueI18n)

const messages = {
  en,
  tr
}

const i18n = new VueI18n({
  locale: 'tr', // set locale
  messages, // set locale messages
  silentTranslationWarn: true
})

Vue.prototype.$moment = moment

export { moment, i18n }
