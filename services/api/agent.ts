import request from '@/services/request'
import { ChatAgentType, ResponseDataType } from '@/types'

const PREFIX = '/api/agent-service/v1'
/**
 * 获取聊天列表
 * @param params
 */
export const getSessions = async (params: {
  keywords: string
}): Promise<ResponseDataType<ChatAgentType[]>> => {
  return request(`${PREFIX}/sessions/my`, {
    method: 'get',
    params: {
      searchWord: params.keywords,
    },
  })
}
