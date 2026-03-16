import { IntegratedUser } from "./types/user"

export async function sendUsers(users: IntegratedUser[]): Promise<void> {
  console.log("enviando para o webhook...")
  console.log("quantidade de usuários:", users.length)

  const response = await fetch("https://webhook.site/cd4d2e42-b9dc-4c08-a149-7ae4717b2222", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  })

  console.log("status da resposta:", response.status, response.statusText)

  if (!response.ok) {
    throw new Error(
      `erro ao enviar usuários para o webhook: ${response.status} ${response.statusText}`
    )
  }
}