import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import * as filters from '@/filters'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueWechatTitle from 'vue-wechat-title'
import Vue2Editor from 'vue2-editor'
import axios from 'axios'
import '@/styles/index.scss'
import '@/permission'

Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.use(Vue2Editor)
axios.defaults.baseURL = '/api'
Vue.prototype.HOST = '/api'
//axios.defaults.headers.common['token'] = sessionStorage.getItem("token")
// axios.create({
//   baseURL: process.env.NOED_ENV==='development'?'dev-api':'/prod-api'
// })
// axios.interceptors.request.use((config) => {
//   if (['/admin'].indexOf(config.url) === -1) {
//     const token = sessionStorage.getItem('token')
//     if (token) {
//       //config.headers.Authorization = token
//       config.headers.token = token
//     }
//   }
//   return config
// })
// Vue.prototype.$axios = axios
new Vue({
    render: (h) => h(App),
    router: router,
    // beforeCreate() {
    //   Vue.prototype.$bus = this //安装全局事件总线(bus加$是为了符合Vue的代码设计规范)
    // },
}).$mount('#app')
