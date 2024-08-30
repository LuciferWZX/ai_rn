import { ChatAgentType, IBaseStoreAction } from '@/types'
import { create } from 'zustand'

interface ChatStoreType {
  //聊天的agent列表
  sessions: ChatAgentType[]
  //查询辽阳的agent列表
  search: string
}
const initialState: ChatStoreType = {
  sessions: [],
  search: '',
}
const useChatStore = create<ChatStoreType & IBaseStoreAction>((set) => ({
  ...initialState,
  clear: () => {
    set({ ...initialState })
  },
}))
export default useChatStore
