import { getTenantInfo, signIn } from '@/services/api'

export class UserServiceManager {
  private constructor() {}
  public static shared = new UserServiceManager()
  public static getTenantInfo = getTenantInfo
  public static signIn = signIn
}
