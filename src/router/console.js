export default [
    {
        path: '/admin',
        component: () =>
            import(
                /* webpackChunkName: "console" */ '@/views/console/layout-console/index.vue'
                ),
        meta: {
            title: '后台管理',
            meta: {
                title: '公司-后台管理',
                requireAuth: true,
            },
        },
        children: [
            {
                name: 'adminhome',
                path: '',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/AdminHome.vue'
                        ),
                meta: {
                    title: '公司-后台管理',
                    requireAuth: true,
                },
            },
            {
                name: 'adminintroduce',
                path: 'introduce',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/AdminIntroduce.vue'
                        ),
                meta: {
                    title: '后台管理-公司介绍',
                    requireAuth: true,
                },
            },
            {
                name: 'textmanage',
                path: 'textmanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/TextManage.vue'
                        ),
                meta: {
                    title: '后台管理-信息管理',
                    requireAuth: true,
                },
            },
            {
                name: 'adminzhaopin',
                path: 'zhaopin',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/AdminZhaoPin.vue'
                        ),
                meta: {
                    title: '后台管理-招聘管理',
                    requireAuth: true,
                },
            },
            {
                name: 'yingpin',
                path: 'yingpin',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/YingPinList.vue'
                        ),
                meta: {
                    title: '后台管理-应聘列表',
                    requireAuth: true,
                },
            },
            {
                name: 'noticemanage',
                path: 'noticemanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/NoticeManage.vue'
                        ),
                meta: {
                    title: '后台管理-通知管理',
                    requireAuth: true,
                },
            },
            {
                name: 'designermanage',
                path: 'designermanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/AdminDesigner.vue'
                        ),
                meta: {
                    title: '后台管理-设计师管理',
                    requireAuth: true,
                },
            },
            {
                name: 'goodmanage',
                path: 'goodmanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/GoodManage.vue'
                        ),
                meta: {
                    title: '后台管理-产品管理',
                    requireAuth: true,
                },
            },
            {
                name: 'anlimanage',
                path: 'anlimanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/AnLiManage.vue'
                        ),
                meta: {
                    title: '后台管理-案例管理',
                    requireAuth: true,
                },
            },
            {
                name: 'bannermanage',
                path: 'bannermanage',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/BannerManage.vue'
                        ),
                meta: {
                    title: '后台管理-轮播图管理',
                    requireAuth: true,
                },
            },
        ],
    },
]
