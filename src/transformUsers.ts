export function transformUsers(users: any[]) {
  return users.map((user) => ({
    externalId: user.id,
    fullName: user.name,
    login: user.username,
    emailAddress: user.email,
  }))
}