// import { isUrl } from './validate'

// // export const formatImgUrl = (data) =>
// //   `${process.env.VUE_APP_DEV_SERVER}/cms/v1/file/download?filename=${data}`

// /**
//  * json转FormData
//  * @param {object} obj
//  * @returns FormData
//  */
// export const obj2FormData = (obj) => {
//   const formData = new FormData()
//   Object.keys(obj).forEach((key) => {
//     if (obj[key] !== null) {
//       formData.append(key, obj[key])
//     }
//   })
//   return formData
// }

// /**
//  * 请求参数处理
//  * @param {object} params
//  * @returns
//  */
// // export const formatParams = (params) => {
// //   if (params && !(params instanceof FormData)) {
// //     const temp = {}
// //     Object.keys(params).forEach((key) => {
// //       const val = params[key]
// //       switch (true) {
// //         case typeof val === 'string':
// //           temp[key] = params[key].trim()
// //           break
// //         case true:
// //           temp[key] = params[key]
// //           break
// //       }
// //     })
// //     return temp
// //   } else {
// //     return params
// //   }
// // }
