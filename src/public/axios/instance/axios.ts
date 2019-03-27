import axios from 'axios'
import { TIMEOUT, TEST_URL, PRO_URL, ApiStatus } from '../../config/index'
import { User } from '../../class/index'
import LoadingInterceptor from '../interceptors/loading-interceptor'
import AlertInterceptor from '../interceptors/alert-interceptor'
import MessageBox from '../../components/src/messageBox/index'

// 添加公用配置
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? PRO_URL : TEST_URL
axios.defaults.timeout = TIMEOUT
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'

let a: any = axios
let instance: any = a.create()

LoadingInterceptor.use(instance)
AlertInterceptor.use(instance)

instance.interceptors.request.use(
  (config: any) => {
    config.headers.Authorization = User.getUserInfo().token

    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response: any) => {
    let { code, message } = response.data

    if (code === ApiStatus.noLogin.code) {
      MessageBox.alert({msg: message}).then(() => {
        User.toLogin()
      })
      return Promise.reject(response)
    }
    return response.data
  },
  (error: any) => {
    // console.error(error);
    return Promise.reject(error)
  }
)
export default instance
