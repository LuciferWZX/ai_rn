export enum AgentStatus {
  disabled,
  enabled,
  no_version = 5,
}
export enum AgentAuthorized {
  disabled,
  enabled,
}
export enum AgentSource {
  market = 'market',
  own = 'own',
}
export enum AgentType {
  /**
   * @description 智能会话
   */
  chat = 'chat',
  /**
   * @description master会话
   */
  master = 'master',
  /**
   * @description 工作流会话
   */
  process = 'process',
  /**
   * @description sql会话
   */
  sql = 'sql',
  /**
   * @description 知识检索类型
   */
  doc = 'doc',
}
export type ChatAgentType = {
  agentCreator: number
  agentDesc: string
  agentId: number
  agentName: string
  agentSn: string
  agentStatus: AgentStatus
  agentType: AgentType
  authorized: AgentAuthorized
  lastMsgTime: null | string
  sessionSn: string
  source: AgentSource
  updateTime: string
}
