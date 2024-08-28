import { useRequest } from 'ahooks'
import { APIManagerManager } from '@/managers'
import { useEffect, useState } from 'react'
import { Toast } from '@ant-design/react-native'
import { ResponseCode } from '@/types'

const useSignIn = () => {
  const [domain, setDomain] = useState<string>('')
  const [canLogin, setCanLogin] = useState<boolean>(false)
  const { runAsync: getTenantInfo, loading: getInfoLoading } = useRequest(
    APIManagerManager.userService.getTenantInfo,
    {
      manual: true,
      onSuccess: (response) => {
        console.log('response:', response)
        if (response.code === ResponseCode.success) {
          setCanLogin(true)
          return
        }
        setCanLogin(false)
        Toast.show({ position: 'top', content: response.message })
      },
      onError: () => {
        setCanLogin(false)
      },
    },
  )
  //如果domain改变了，需要重新验证
  useEffect(() => {
    setCanLogin(false)
  }, [domain])
  return {
    getTenantInfo,
    getInfoLoading,
    domain,
    setDomain,
    canLogin,
  }
}
export default useSignIn
