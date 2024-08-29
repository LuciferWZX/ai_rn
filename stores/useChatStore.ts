import { ChatAgentType, IBaseStoreAction } from '@/types'
import { create } from 'zustand'

interface ChatStoreType {
  sessions: ChatAgentType[]
}
const initialState: ChatStoreType = {
  sessions: [],
}
const useChatStore = create<ChatStoreType & IBaseStoreAction>((set) => ({
  ...initialState,
  clear: () => {
    set({ ...initialState })
  },
}))
export default useChatStore
