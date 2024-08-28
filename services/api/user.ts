import request from '@/services/request'
import { ITenants, ResponseDataType } from '@/types'

const PREFIX = '/api/user-service'
/**
 * 获取租户的信息
 * @param domain
 */
export const getTenantInfo = async (domain: string): Promise<ResponseDataType<ITenants>> => {
  return request(`${PREFIX}/v1/tenants?domain=${domain}`, {
    method: 'get',
  })
}
