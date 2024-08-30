import { APIManagerManager } from '@/managers'
import { useRequest } from 'ahooks'
import { useState } from 'react'
import { ResponseCode } from '@/types'

const useChat = (config?: { debounceWait?: number }) => {
  const [isError, setIsError] = useState<boolean>(false)
  const { loading: getSessionsLoading, runAsync: getSessions } = useRequest(
    APIManagerManager.agentService.getSessions,
    {
      manual: true,
      debounceWait: config?.debounceWait,
      loadingDelay: 200,
      onBefore: () => {
        setIsError(false)
      },
      onSuccess: (response) => {
        if (response.code === ResponseCode.success) {
          setIsError(false)
          return
        }
        setIsError(true)
      },
      onError: () => {
        setIsError(true)
      },
    },
  )
  return {
    getSessions,
    getSessionsLoading,
    isError,
  }
}
export default useChat
