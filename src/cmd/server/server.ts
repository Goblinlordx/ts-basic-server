import { App } from "../../domain/app/app"

async function main() {
  const app = new App()
  await app.init()
  const ctx = app.contextService.createContext()
  await app.accountQuerier.getById(ctx, "test")

  await new Promise(() => {})
}

if (require.main === module) {
  ;(async () => {
    await main()
    process.exit(0)
  })().catch((err) => {
    console.error(err)
    process.exit(-1)
  })
}
