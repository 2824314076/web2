export default [
    {
        path: '/home',
        component: () =>
            import(
                /* webpackChunkName: "console" */ '@/views/console/home.vue'
                ),
        children: [
            {
                name: 'homenews',
                path: '/homenews/:id',
                meta:{
                    keepAlive:true
                },
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/components/home/news'
                        )
            },
            {
                name: 'articleidnex',
                path: '/articleidnex',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/components/article/index'
                        )
            },
            {
                name: 'articleview',
                path: '/articleview',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/console/components/article/view'
                        )
            },
            {
                name: 'weihuoyunshu',
                path: '/weihuo',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/show/WeiHuo'
                        )
            },
            {
                name: 'puhuoyunshu',
                path: '/puhuo',
                component: () =>
                    import(
                        /* webpackChunkName: "console" */ '@/views/show/PuHuo'
                        )
            },{
                name: 'tieluyunshu',
                path: 'tielu',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/TieLu.vue'),
                meta: {
                    title: '公铁联运',
                },
            },
            {
                name: 'keyunyunshu',
                path: 'keyun',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/KeYun.vue'),
                meta: {
                    title: '客运',
                },
            },{
                name: 'dazongmaoyi',
                path: 'maoyi',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/MaoYi.vue'),
                meta: {
                    title: '大宗贸易',
                },
            },
            {
                name: 'disanfangfuwu',
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
                name: 'yunhsubianji',
                path: 'BackstageAdministration',
                component: () =>
                    import(/* webpackChunkName: "show" */ '@/views/show/BackstageAdministration.vue'),
                meta: {
                    title: '后台',
                },
            },
        ],
    },
]
