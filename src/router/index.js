// 引入vue
import Vue from 'vue'
// 引入路由VueRouter
import VueRouter from 'vue-router'
// 引入routes文件
import routes from './routes'

// 声明使用路由
Vue.use(VueRouter)
// 实例化路由并暴露出去
export default new VueRouter({
  mode: 'history', // 默认路由没有#号
  routes // 路由组件注册的数组
})