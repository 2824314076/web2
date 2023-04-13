export default [
    {
        path: '/',
        name: 'layoutShow',
        component: () =>
            import(
                /* webpackChunkName: "show" */ '@/views/show/layout-show/index.vue'
                ),
        meta: {
            title: '宁东物流大数据平台-官网',
        },
        children: [
            {
                name: 'index',
                path: '',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/index.vue'),
                meta: {
                    title: '宁东物流大数据平台-官网',
                },
            },
            {
                name: 'jianguan',
                path: 'jianguan',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/JianGuan.vue'),
                meta: {
                    title: '案例',
                },
            },
            {
                name: 'gonglue',
                path: 'gonglue',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/GongLue.vue'),
                meta: {
                    title: '通知',
                },
            },
            {
                name: 'designer',
                path: 'designer',
                component: () =>
                    import(
                        /* webpackChunkName: "show" */ '@/views/show/GoodDesigner.vue'
                        ),
                meta: {
                    title: '设计师',
                },
            },
            {
                name: 'connectus',
                path: 'connectus',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/ConnectUs.vue'),
                meta: {
                    title: '联系我们',
                },
            },
            {
                name: 'weihuo',
                path: 'weihuo',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/WeiHuo.vue'),
                meta: {
                    title: '产品',
                },
            },
            {
                name: 'puhuo',
                path: 'puhuo',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/PuHuo.vue'),
                meta: {
                    title: '普货',
                },
            },
            {
                name: 'introduce',
                path: 'introduce',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/IntroduceMe.vue'),
                meta: {
                    title: '简介',
                },
            },
            {
                name: 'notice',
                path: 'notice',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/NoticePage.vue'),
                //props:true,
                meta: {
                    title: '详情',
                },
            },
            {
                name: 'gooddetail',
                path: 'gooddetail',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/GoodDetails.vue'),
                meta: {
                    title: '产品详情',
                },
            },
            {
                name: 'anlidetail',
                path: 'anlidetail',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/AnLiDetail.vue'),
                meta: {
                    title: '案例详情',
                },
            },
            {
                name: 'tielu',
                path: 'tielu',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/TieLu.vue'),
                meta: {
                    title: '公铁联运',
                },
            },
            {
                name: 'keyun',
                path: 'keyun',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/KeYun.vue'),
                meta: {
                    title: '客运',
                },
            },
            {
                name: 'maoyi',
                path: 'maoyi',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/MaoYi.vue'),
                meta: {
                    title: '大宗贸易',
                },
            },
            {
                name: 'thirdservice',
                path: 'thirdservice',
                component: () =>
                    import(
                        /* webpackChunkName: "show" */ '@/views/show/ThirdService.vue'
                        ),
                meta: {
                    title: '第三方服务',
                },
            },
            {
                name: 'BackstageAdministration',
                path: 'BackstageAdministration',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/BackstageAdministration.vue'),
                meta: {
                    title: '后台',
                },
            },
            {
                name: 'list',
                path: 'list',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/list.vue'),
                meta: {
                    title: '后台',
                },
            }, {
                name: 'Enterprise',
                path: 'Enterprise',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/Enterprise.vue'),
                meta: {
                    title: '政策',
                },
            },
            {
                name: 'enterprises',
                path: 'enterprises',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/enterprise/enterprises.vue'),
                meta: {
                    title: '政策',
                },
            },

        ],
    },

]
