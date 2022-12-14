import { App } from "../../domain/app/app"

async function main() {
  const app = new App()

  await app.init()
  await app.dbsync()
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
