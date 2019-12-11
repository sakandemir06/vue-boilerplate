import Vue from 'vue'
import router from './router'
import store from './store'

import NProgress from 'nprogress' // progress bar
import '@/components/NProgress/nprogress.less' // progress bar custom style
import { setDocumentTitle, domTitle } from '@/utils/domUtil'
import { ACCESS_TOKEN } from '@/store/mutation-types'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['login', 'register', 'registerResult'] // no redirect whitelist
const defaultRoutePath = '/dashboard'
const defaultAdminRoutePath = '/admin'

router.beforeEach((to, from, next) => {
  NProgress.start() // start progress bar
  to.meta && (typeof to.meta.title !== 'undefined' && setDocumentTitle(`${to.meta.title} - ${domTitle}`))
  if (Vue.ls.get(ACCESS_TOKEN)) {
    /* has token */
    if (to.path === '/user/login' || to.path === '/user/register') {
      let isAdmin
      if (store.getters.userInfo.id) {
        isAdmin = store.getters.userInfo.roles.includes('admin') || store.getters.userInfo.roles.includes('super')
      } else isAdmin = false
      let path = isAdmin ? defaultAdminRoutePath : defaultRoutePath
      next({ path })
      NProgress.done()
    } else {
      if (store.getters.userInfo && !store.getters.userInfo.id) {
        store
          .dispatch('GetInfo')
          .then(res => {
            if (!res.data.active_company && (!res.data.roles.includes('admin') && !res.data.roles.includes('super'))) {
              next({ path: '/user/company-select' })
            } else {
              store.dispatch('GenerateRoutes', res.data).then(() => {
                console.log(store.getters.addRouters)
                router.addRoutes(store.getters.addRouters)
                const redirect = decodeURIComponent(from.query.redirect || to.path)
                if (to.path === redirect) {
                  // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
                  next({ ...to, replace: true })
                } else {
                  // 跳转到目的路由
                  next({ path: redirect })
                }
              })
            }
          })
          .catch(() => {
            Vue.ls.remove(ACCESS_TOKEN)
            next({ path: '/user/login', query: { redirect: to.fullPath } })
          })
      } else {
        next()
      }
    }
  } else {
    if (whiteList.includes(to.name)) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next({ path: '/user/login', query: { redirect: to.fullPath } })
      NProgress.done() // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
})

router.afterEach(() => {
  NProgress.done() // finish progress bar
})
