// 引入Vue
import Vue from 'vue'
// 引入组件
import App from './App.vue'
// 引入路由
import router from './router'
// 引入适配文件
import './utils/rem'
// 引入vant组件库--轮播图
import {
  Swipe,
  SwipeItem
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);

// 设置控制台输出显示否
Vue.config.productionTip = false
// 创建实例并且挂载
new Vue({
  render: h => h(App),
  // 注册路由
  router,
}).$mount('#app')