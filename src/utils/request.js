import axios from "axios";

let baseURL;
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://43.142.179.198:8081';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://43.142.179.198:8081';
}

// 实例
let instance = axios.create({
    baseURL: baseURL,
    timeout: 1000
})

instance.interceptors.request.use(req => {
    console.log(req, '请求');
    return req
}, err => {
    console.log(err, '请求失败');
    return Promise.reject(err)
})
instance.interceptors.response.use(req => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
    // console.log(req, '响应');
    // return req
}, err => {
    console.log(err, '响应失败');
    return Promise.reject(err)
})


// import axios from 'axios'
// import { Message, MessageBox } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
// import { RESPONSECODE } from '../constant'
// import { formatParams } from './format'
// import router from '@/router'

// const service = axios.create({
//     // baseURL: process.env.VUE_APP_BASE_API,
//     baseURL:'http://43.142.179.198:8081',
//     timeout: 60000 * 2,
// })
// const errBody = { code: -1 }

// const requestList = []
// const ignoreCancel = [
//     //   'get:/cms/v1/task/list',
//     //   'get:/cms/v1/item/list',
//     //   'get:/cms/v1/pay/order',
// ]
// const CancelToken = axios.CancelToken

// service.interceptors.request.use(
//     (config) => {
//         // const token = store.getters.token
//         const { method, url } = configs
//         // if (token) {
//         //     config.headers.Authorization = `Bearer ${token}`
//         // }
//         // const index = requestList.findIndex(
//         //     (request) => request.url === `${method}:${url}`
//         // )
//         // if (index >= 0) {
//         //     requestList[index].cancel()
//         // }
//         // if (!ignoreCancel.includes(`${method}:${url}`)) {
//         //     config.cancelToken = new CancelToken((cancel) => {
//         //         requestList.push({ cancel, url: `${method}:${url}` })
//         //     })
//         // }
//         return config
//     },
//     (error) => {
//         // TODO
//         // !console.log(error) // for debug
//         return Promise.reject(error)
//     }
// )

// // response interceptor
// service.interceptors.response.use(
//     (response) => {
//         const res = response.data
//         const index = requestList.findIndex((request) => {
//             const { method, url } = response.config
//             return request.url === `${method}:${url}`
//         })
//         if (index >= 0) {
//             requestList.splice(index, 1)
//         }
//         return res
//     },
//     (error) => {
//         console.log(error)
//         if (axios.isCancel(error)) {
//             return Promise.reject(errBody)
//         } else {
//             Message.warning('网络错误')
//             return Promise.reject(errBody)
//         }
//     }
// )
// const http = async (method, url, params, msg = { succMsg: '操作成功' }) => {
//     const config = {
//         method,
//         url,
//     }
//     const newParams = formatParams(params)
//     switch (method) {
//         case 'GET':
//             config.params = newParams
//             break
//         case 'POST' || 'PATCH' || 'PUT' || 'DELETE':
//             config.data = newParams
//             break
//         case 'PATCH':
//             config.data = newParams
//             break
//         case 'PUT':
//             config.data = newParams
//             break
//         case 'DELETE':
//             config.data = newParams
//             break
//         default:
//             break
//     }
//     const res = await service(config)
//     if (res && !RESPONSECODE.IGNORE.includes(res.code)) {
//         formatResMsg(res, msg)
//     }
//     return res
// }
// /**
//  *
//  * @param {*} res
//  * @param {Object|null|undefined} msg null:成功失败都不弹，undefined:接口msg ，Object:细分成功失败的msg
//  */
// let authOut = true
// const formatResMsg = (res, msg) => {
//     if (RESPONSECODE.ERRTOKEN.includes(res.code)) {
//         if (authOut) {
//             authOut = false
//             setTimeout(() => {
//                 authOut = true
//             }, 5 * 1000)
//             Message.warning('登录失效，请重新登录')
//             store.dispatch('user/logout').then(() => {
//                 location.reload()
//             })
//         }
//         return
//     }
//     switch (res.code) {
//         case RESPONSECODE.NEEDCHARGE:
//             MessageBox.confirm('您的余额不足, 是否前去充值?', '提示', {
//                 confirmButtonText: '前往充值',
//                 cancelButtonText: '暂不充值',
//                 type: 'warning',
//             })
//                 .then(() => {
//                     router.push({ name: 'Wallet' })
//                 })
//                 .catch(() => { })
//             return
//         default:
//             break
//     }
//     if (res.code && msg !== null) {
//         const { succMsg, errorMsg } = msg || {}
//         const showSucc = succMsg !== null
//         const showError = errorMsg !== null
//         switch (res.code) {
//             case RESPONSECODE.SUCCESS:
//                 showSucc &&
//                     Message.success({
//                         message: succMsg || res.msg || '',
//                         duration: succMsg ? 3000 : 1200,
//                     })
//                 break
//             default:
//                 showError &&
//                     Message.warning({
//                         message: errorMsg || res.msg || '',
//                         duration: 1200,
//                     })
//                 break
//         }
//     }
// }

