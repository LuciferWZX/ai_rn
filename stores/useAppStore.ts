import { BaseUser, IBaseStoreAction } from '@/types'
import { create } from 'zustand'

interface AppStoreType {
  user: BaseUser | null
}
const initialState: AppStoreType = {
  user: null,
}
const useAppStore = create<AppStoreType & IBaseStoreAction>((set) => ({
  ...initialState,
  clear: () => {
    set({ ...initialState })
  },
}))
export default useAppStore
