export interface ITenants {
  config?: {
    backgroundImg?: string
    botAvatar?: string
    copyrightStatement?: string
    homepageLogo?: string
    loginLogo?: string
    themeColor?: string
    userMsgBgColor?: string
  }
  name: string
}
export interface BaseUser {
  accessToken: string
  loggedIn: boolean
  name: string
  domainName: string
  refreshToken: string
  tenantSn: string
  userSn: string
}
type AppType = {
  appId: number
}
type RoleType = {
  code: string
  name: string
}
type PermissionType = {
  code: string
  name: string | null
}
export interface ResourceType {
  app: AppType[]
  roles: RoleType[]
  permission: PermissionType[]
  jumpUrl: string | null
}
