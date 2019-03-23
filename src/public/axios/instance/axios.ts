import axios from 'axios'
import { TIMEOUT, TEST_URL, PRO_URL, ApiStatus } from '../../config'
import { User } from '../../class'
import LoadingInterceptor from '../interceptors/loading-interceptor'
import AlertInterceptor from '../interceptors/alert-interceptor'
import MessageBox from '../../components/src/messageBox'

// 添加公用配置
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PRO_URL : TEST_URL
axios.defaults.timeout = TIMEOUT
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

let instance = axios.create()

LoadingInterceptor.use(instance)
AlertInterceptor.use(instance)

instance.interceptors.request.use(
  config => {
    config.headers.Authorization = User.getUserInfo().token

    return config
  },
  error => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  response => {
    let { code, message } = response.data

    if (code === ApiStatus.noLogin.code) {
      MessageBox.alert(message).then(() => {
        User.toLogin()
      })
      return Promise.reject(response)
    }
    return response.data
  },
  error => {
    // console.error(error);
    return Promise.reject(error)
  }
)
export default instance
