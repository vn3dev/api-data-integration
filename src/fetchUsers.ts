import { UserApi } from "./types/user"

export async function fetchUsers(): Promise<UserApi[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")

  if (!response.ok) {
    throw new Error("erro na busca")
  }

  const users: UserApi[] = await response.json()

  return users
}