import { extend, ResponseError } from 'umi-request'
import { match } from 'ts-pattern'
import { BaseUser, ResponseCode, ResponseDataType } from '@/types'
import { useAppStore } from '@/stores'
import { Toast } from '@ant-design/react-native'
import { AppManager } from '@/managers/AppManager'
export interface ServerError {
  data: null
  message: string
  code: 401 | number
}
const errorHandler = function (error: ResponseError<ServerError>) {
  if (error.response) {
    if (error.data) {
      match(error.data.code).with(401, () => {
        console.log('data:401')
        AppManager.shared.logout().then()
      })
      Toast.show({ position: 'top', content: error.data.message })
      throw error
    }
    //从服务器返回的错误
    const status = error.response.status
    switch (status) {
      case 401: {
        console.log('401')
        break
      }
      case 500: {
        console.log('500')
        break
      }
    }
  }
  Toast.show({ position: 'top', content: error.message })
  throw error
}
const request = extend({
  timeout: 1000 * 10,
  errorHandler: errorHandler,
})
request.interceptors.request.use((url, options) => {
  const user: BaseUser | null = useAppStore.getState().user
  const headers: Record<string, any> = options.headers || {}
  if (user) {
    headers.authorization = `Bearer ${user.accessToken}`
  }
  return {
    url,
    options: {
      ...options,
      headers,
    },
  }
})
request.interceptors.response.use(async (response: Response) => {
  const data: ResponseDataType<any> = await response.clone().json()
  match(data).with({ code: ResponseCode.server_error }, (_data) => {
    console.error(response.url + '出错')
  })
  return response
})
export default request
