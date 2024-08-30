import { useAppStore } from '@/stores'
import { useShallow } from 'zustand/react/shallow'
import { useEffect } from 'react'
import { CommonActions } from '@react-navigation/native'
import { useNavigation } from 'expo-router'

export const useActiveUser = () => {
  const user = useAppStore(useShallow((state) => state.user))
  const navigation = useNavigation()
  useEffect(() => {
    if (!user) {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: 'index' }, { name: '(auth)', params: { screen: 'sign-in' } }],
        }),
      )
    }
  }, [user])
}
