import request from '@/services/request'
import { BaseUser, ITenants, ResponseDataType } from '@/types'

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
/**
 * 登录
 * @param data
 */
export const signIn = async (data: {
  name: string
  domain: string
  password: string
  appId: string
}): Promise<ResponseDataType<BaseUser>> => {
  return request(`${PREFIX}/v1/oauth/token`, {
    method: 'post',
    data: data,
  })
}
