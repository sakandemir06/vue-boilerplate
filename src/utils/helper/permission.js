function plugin(Vue) {
  if (plugin.installed) {
    return
  }

  !Vue.prototype.$hasRole &&
    Object.defineProperties(Vue.prototype, {
      $hasRole: {
        get() {
          const _this = this
          return (...role) => {
            let status = false
            const permissionList = _this.$store.getters.roles
            for (let i = 0; i < role.length; i++) {
              status = permissionList.includes(role[i])
              if (status === true) break
            }
            return status
          }
        }
      }
    })

  !Vue.prototype.$auth &&
    Object.defineProperties(Vue.prototype, {
      $auth: {
        get() {
          const _this = this
          return permissions => {
            const [permission, action] = permissions.split('.')
            const permissionList = _this.$store.getters.roles.permissions
            return (
              permissionList
                .find(val => {
                  return val.permissionId === permission
                })
                .actionList.findIndex(val => {
                  return val === action
                }) > -1
            )
          }
        }
      }
    })
}

export default plugin
