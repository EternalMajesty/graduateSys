// uitls包下的文件用于封装axios请求
// 该文件用于创建axios实例对象，设置请求的基本配置，添加请求拦截器和响应拦截器
import axios from 'axios'
//创建axios实例对象
const request = axios.create({
  baseURL: 'http://localhost:8080/', //设置请求的基础URL
  timeout: 600000, //设置请求的超时时间，开发环境下设置为600000ms，生产环境下可以设置为30000ms
  headers: {
    'Content-Type': 'application/json', //设置请求头的Content-Type
  },
})

//axios的响应 response 拦截器
request.interceptors.response.use(
  (response) => { //成功回调
    return response.data
  },
  (error) => { //失败回调
    return Promise.reject(error)
  }
)

export default request