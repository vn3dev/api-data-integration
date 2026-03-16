import { IntegratedUser, UserApi } from "./types/user"

export function transformUsers(users: UserApi[]): IntegratedUser[] {
  return users.map((user) => ({
    externalId: user.id,
    fullName: user.name,
    login: user.username,
    emailAddress: user.email,
  }))
}