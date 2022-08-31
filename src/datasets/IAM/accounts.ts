import { App } from "../../domain/app/app"
import { Account, AccountBasicAuth } from "../../domain/IAM/entities/account"

export function getIAMDataset(app: App) {
  const rootAccount = new Account({
    id: "093ab4e2-e4b3-4833-afea-d6483a28e697",
    email: app.env.ROOT_EMAIL,
    basicAuth: new AccountBasicAuth({
      email: app.env.ROOT_EMAIL,
      password: app.env.ROOT_PASSWORD,
    }),
  })

  return { rootAccount }
}
