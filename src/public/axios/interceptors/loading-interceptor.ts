import Loading from '../../components/src/loading'

const install = (axios: any) => {
  axios.interceptors.request.use(
    (config: any) => {
      let { showLoading = true } = config
      if (showLoading) Loading.show()
      return config
    },
    (error: Error) => {
      Loading.close()
      return Promise.reject(error)
    }
  )

  axios.interceptors.response.use(
    (response: any) => {
      Loading.close()
      return response.data
    },
    (error: Error) => {
      Loading.close()
      return Promise.reject(error)
    }
  )
}

export default {
  use: install
}
