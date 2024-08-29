import { UserServiceManager } from './api/UserServiceManager'
import { AgentServiceManager } from './api/AgentServiceManager'

export class APIManagerManager {
  private constructor() {}
  public static userService = UserServiceManager
  public static agentService = AgentServiceManager
}
