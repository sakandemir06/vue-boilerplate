const getters = {
  device: state => state.app.device,
  theme: state => state.app.theme,
  color: state => state.app.color,
  token: state => state.authentication.token,
  avatar: state => state.authentication.avatar,
  nickname: state => state.authentication.name,
  welcome: state => state.authentication.welcome,
  roles: state => state.authentication.roles,
  userInfo: state => state.authentication.info,
  addRouters: state => state.permission.addRouters,
  multiTab: state => state.app.multiTab,
  lang: state => state.i18n.lang
}

export default getters
