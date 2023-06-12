//组件
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
import VueQuillEditor from 'vue-quill-editor' //调用编辑器
//样式
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import "@/css/iconfont.css"

//使用
Vue.config.productionTip = false

Object.keys(filters).forEach((key) => {
    Vue.filter(key, filters[key])
})
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueWechatTitle)
Vue.use(Vue2Editor)
Vue.use(VueQuillEditor)
axios.defaults.baseURL = '/api'
Vue.prototype.HOST = '/api'
new Vue({
    render: (h) => h(App),
    router: router,
    // beforeCreate() {
    //   Vue.prototype.$bus = this //安装全局事件总线(bus加$是为了符合Vue的代码设计规范)
    // },
}).$mount('#app')
