import VueRouter from 'vue-router'
import console from './console'
import show from './show'
import enterprises from "./enterprises"

const routes = [
    ...show,
    ...console,
    ...enterprises,
    {
        path: '/404',
        name: '404',
        component: () =>
            import(/* webpackChunkName: "404" */ '@/views/NoFound.vue'),
        meta: {
            title: '宁东物流大数据平台-404',
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import(/* webpackChunkName: "404" */ '@/views/login/index.vue'),
        meta: {
            title: '管理员登录',
        },
    },
    // {
    //     name: 'backstage',
    //     path: '/backstage',
    //     component: () =>
    //         import(/* webpackChunkName: "show" */ '@/views/show/BackstageAdministration.vue'),
    //     meta: {
    //         title: '后台管理',
    //     },
    // },
    {
        path: '*',
        redirect: '/404',
    },
]

const router = new VueRouter({
    //   history: createWebHistory(process.env.BASE_URL),
    // mode: 'hash',
    routes,
})

export default router
