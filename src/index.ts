import { fetchUsers } from "./fetchUsers"
import { transformUsers } from "./transformUsers"

async function main() {
  try {
    console.log("buscando usuários...")

    const users = await fetchUsers()

    console.log("dados originais:")
    console.log(users)

    const transformedUsers = transformUsers(users)

    console.log("dados transformados:")
    console.log(transformedUsers)
  } catch (error) {
    console.error("erro na integração:", error)
  }
}

main()