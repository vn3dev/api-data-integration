import { IntegratedUser } from "./types/user"

export async function sendUsers(users: IntegratedUser[]): Promise<void> {

  const webhookUrl = process.env.WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error("WEBHOOK_URL não definida")
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(users),
  })

  if (!response.ok) {
    throw new Error(
      `erro ao enviar para o webhook: ${response.status} ${response.statusText}`
    )
  }
}