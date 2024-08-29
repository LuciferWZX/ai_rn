import { getSessions } from '@/services/api'

export class AgentServiceManager {
  private constructor() {}
  public static shared = new AgentServiceManager()
  public static getSessions = getSessions
}
