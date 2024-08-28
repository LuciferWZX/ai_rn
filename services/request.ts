import { extend, ResponseError } from 'umi-request'
import { match } from 'ts-pattern'
import { ResponseCode, ResponseDataType } from '@/types'
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
      })
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
  if (error.type === 'Timeout') {
    console.log('Timeout')
  }
  throw error
}
const request = extend({
  timeout: 1000 * 10,
  errorHandler: errorHandler,
})
request.interceptors.request.use((url, options) => {
  // const user: BaseUser | null = StorageManager.shared.get(APP_STORAGE_KEY.enterprise_user);
  const headers: Record<string, any> = options.headers || {}
  // if (user) {
  //   headers['authorization'] = `Bearer ${user.accessToken}`;
  // }
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
