import { fetchUsers } from "./fetchUsers"

async function main() {
  try {
    console.log("buscando usuários...")

    const users = await fetchUsers()

    console.log("usuários encontrados:")
    console.log(users)
  } catch (error) {
    console.error("erro na integração:", error)
  }
}

main()