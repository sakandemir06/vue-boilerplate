import { asyncRouterMap, constantRouterMap } from '@/config/router.config'

function hasPermission(permission, active_company, route) {
  if (route.meta && route.meta.permission) {
    let flag = false
    if (route.meta.permission.includes('activeCompany') && !active_company) {
      flag = false
    } else {
      for (let i = 0, len = permission.length; i < len; i++) {
        flag = route.meta.permission.includes(permission[i])
        if (flag) {
          return true
        }
      }
    }
    return false
  }
  return true
}

function filterAsyncRouter(routerMap, data) {
  const { roles, active_company } = data
  const accessedRouters = routerMap.filter(route => {
    if (hasPermission(roles, active_company, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, data)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers
      state.routers = constantRouterMap.concat(routers)
    }
  },
  actions: {
    GenerateRoutes({ commit }, data) {
      return new Promise(resolve => {
        const accessedRouters = filterAsyncRouter(asyncRouterMap, data)
        commit('SET_ROUTERS', accessedRouters)
        resolve()
      })
    }
  }
}

export default permission
