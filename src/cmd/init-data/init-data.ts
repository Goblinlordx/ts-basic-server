import { getIAMDataset } from "../../datasets/IAM/accounts"
import { App } from "../../domain/app/app"

async function main() {
  console.log("Initializing data...")
  const app = new App()
  const { rootAccount } = getIAMDataset(app)
  console.log(rootAccount)
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
