import { UserServiceManager } from './api/UserServiceManager'

export class APIManagerManager {
  private constructor() {}
  public static userService = UserServiceManager
}
