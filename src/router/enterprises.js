export default [
    {
        path: '/enterprises',
        name: 'enterprises',
        component: () =>
            import(
                '@/views/enterprise/enterprises'
                ),
        meta: {
            title: '宁东物流大数据平台-官网',
        },
        children:[
            // {
            //     name: 'index',
            //     path: '',
            //     component: () =>
            //         import(/* webpackChunkName: "show" */ '@/views/show/index.vue'),
            //     meta: {
            //         title: '宁东物流大数据平台-官网',
            //     },
            // },
        ]
    },

]
