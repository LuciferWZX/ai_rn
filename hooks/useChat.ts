import { APIManagerManager } from '@/managers'
import { useRequest } from 'ahooks'

const useChat = (config?: { debounceWait?: number }) => {
  const { loading: getSessionsLoading, runAsync: getSessions } = useRequest(
    APIManagerManager.agentService.getSessions,
    {
      manual: true,
      debounceWait: config?.debounceWait,
    },
  )
  return {
    getSessions,
    getSessionsLoading,
  }
}
export default useChat
