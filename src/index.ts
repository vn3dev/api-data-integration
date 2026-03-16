import "dotenv/config"
import { fetchUsers } from "./fetchUsers"
import { transformUsers } from "./transformUsers"
import { sendUsers } from "./sendUsers"

async function main() {
  try {
    console.log("buscando usuários...")

    const users = await fetchUsers()

    console.log("dados originais:")
    console.log(users)

    const transformedUsers = transformUsers(users)

    console.log("dados transformados:")
    console.log(transformedUsers)

    await sendUsers(transformedUsers)

    console.log("usuários enviados com sucesso para o webhook")
  } catch (error) {
    console.error("erro na integração:", error)
  }
}

main()