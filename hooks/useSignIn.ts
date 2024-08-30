import { useRequest } from 'ahooks'
import { APIManagerManager, StorageManager } from '@/managers'
import { useEffect, useState } from 'react'
import { Toast } from '@ant-design/react-native'
import { ResponseCode, StorageKey } from '@/types'
import { useAppStore } from '@/stores'
import { useNavigation } from 'expo-router'
import { Alert } from 'react-native'
import { CommonActions } from '@react-navigation/native'

const useSignIn = () => {
  const [domain, setDomain] = useState<string>('')
  const [canLogin, setCanLogin] = useState<boolean>(false)
  const navigation = useNavigation()
  const {
    runAsync: getTenantInfo,
    loading: getInfoLoading,
    data: tenantResponse,
  } = useRequest(APIManagerManager.userService.getTenantInfo, {
    manual: true,
    onSuccess: (response) => {
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
  })
  const { runAsync: signIn, loading: signInLoading } = useRequest(
    APIManagerManager.userService.signIn,
    {
      manual: true,
      onSuccess: async (response) => {
        console.log('response:', response)
        if (response.code === ResponseCode.success) {
          const user = response.data
          user.domainName = tenantResponse!.data.name
          await StorageManager.shared.set(StorageKey.user, user)
          useAppStore.setState({
            user: user,
          })

          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: '(tabs)', params: { screen: 'chat' } }],
            }),
          )
          return
        }
        Alert.alert('登录失败', response.message, [{ text: '确定', style: 'cancel' }])
        // Toast.show({ position: 'top', content: response.message })
      },
      onError: (err) => {
        console.log('err:', err)
      },
    },
  )
  //如果domain改变了，需要重新验证
  useEffect(() => {
    setCanLogin(false)
  }, [domain])
  return {
    getTenantInfo,
    signIn,
    getInfoLoading,
    signInLoading,
    domain,
    setDomain,
    canLogin,
  }
}
export default useSignIn
