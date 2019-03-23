import MessageBox from '../../components/src/messageBox'
import { ApiStatus } from '../../config'

const install = (axios: any) => {
  axios.interceptors.response.use(
    (response: any) => {
      let {
        config: { showAlert = true },
        data: { code = -1, message = '连接超时，请检查网络' }
      } = response

      if (showAlert && code !== ApiStatus.success.code) {
        MessageBox.alert(message)
      }

      return response
    },
    (error: Error) => {
      MessageBox.alert({msg: '连接超时，请检查网络'})
      return Promise.reject(error)
    }
  )
}

export default {
  use: install
}
