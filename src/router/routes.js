// 引入组件并注册成路由组件
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Search from '../pages/Search'

// 暴露出去
export default [
  // Home路由
  {
    path: '/',
    component: Home
  },
  // 登录路由
  {
    path: '/login',
    component: Login
  },
  // 注册路由
  {
    path: '/register',
    component: Register
  },
  // 搜索路由
  {
    path: '/search',
    component: Search
  },
  {
    path: '/',
    redirect: '/'
  }
]