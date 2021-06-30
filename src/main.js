import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './utils/common.css'
import remixicon from 'remixicon/fonts/remixicon.css'
import  * as echarts from 'echarts'
// import axios from 'axios'
import http from './utils/http'

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.prototype.$axios=http

Vue.use(ElementUI)
Vue.use(remixicon)


new Vue({
  router,
  echarts,
  render: h => h(App)
}).$mount('#app')
