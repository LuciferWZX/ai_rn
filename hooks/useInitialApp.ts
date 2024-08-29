import { StorageManager } from '@/managers'
import { BaseUser, StorageKey } from '@/types'
import { useAppStore } from '@/stores'
import { useState } from 'react'

const useInitialApp = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const initialApp = async () => {
    const user = await StorageManager.shared.get<BaseUser>(StorageKey.user)
    if (user) {
      useAppStore.setState({ user: user })
    }
  }

  return {
    initialApp,
    loading,
    setLoading,
  }
}
export default useInitialApp
