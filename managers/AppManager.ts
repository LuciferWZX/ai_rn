import { StorageManager } from './StorageManager'
import { StorageKey } from '@/types'
import { useAppStore } from '@/stores'
import { router } from 'expo-router'

export class AppManager {
  private constructor() {}
  public static shared = new AppManager()
  async logout() {
    await StorageManager.shared.remove(StorageKey.user)
    useAppStore.setState({ user: null })
    router.replace('/sign-in')
  }
}
