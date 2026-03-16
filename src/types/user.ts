export interface UserApi {
  id: number
  name: string
  username: string
  email: string
}

export interface IntegratedUser {
  externalId: number
  fullName: string
  login: string
  emailAddress: string
}