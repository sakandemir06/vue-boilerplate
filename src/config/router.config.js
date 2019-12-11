import { UserLayout, BasicLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: 'Dashboard' },
    redirect: '/dashboard',
    children: [
      // dashboard
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/dashboard/Analysis'),
        meta: {
          title: 'Dashboard',
          keepAlive: true,
          icon: 'dashboard',
          permission: ['activeCompany', 'admin', 'super', 'manager', 'reporting']
        }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/authentication/Login')
      },
      {
        path: 'register',
        name: 'register',
        component: () => import(/* webpackChunkName: "user" */ '@/views/authentication/Register')
      }
    ]
  },

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
