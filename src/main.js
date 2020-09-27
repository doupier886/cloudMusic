import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 mui 基本css样式
import 'assets/mui/css/mui.css'

// 轮播图组件
import { Swipe, SwipeItem } from 'vant';
import { Field } from 'vant';
import { CellGroup } from 'vant'
import { Button } from 'vant'
import { Loading } from 'vant';
import { Slider } from 'vant';
import { ActionSheet } from 'vant';

// 引入css样式
import 'vant/lib/index.css';
Vue.use(Swipe)  // 安装组件
Vue.use(SwipeItem)  
Vue.use(Field);  // 输入框
Vue.use(CellGroup)  
Vue.use(Button)  // 按钮
Vue.use(Loading);  // 加载动画
Vue.use(Slider);  // 滑块
Vue.use(ActionSheet);  // 动作面板


// Vue.config.warnHandler = function (msg) {  
//   if (!msg.includes('Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders.')) { // uniApp bug: https://ask.dcloud.net.cn/question/71966  
//     return console.warn && console.warn(msg)  
//   }  
// }

import moment from 'moment' 
// 过滤器  pattern 时间格式
Vue.filter('getTime',function(date,pattern="YYYY年MM月DD日"){
  // 调用 moment 方法传入时间 获取指定的时间
  // 调用 format 格式化时间
  return moment(date).format(pattern)
})

// 引入 toast 组件
import toast from 'components/common/toast'
Vue.use(toast)  // 安装 toast 组件

import loading from 'components/common/Loading'
Vue.use(loading)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
