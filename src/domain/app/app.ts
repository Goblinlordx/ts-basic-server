import { ContextService } from "../context/ContextService"
import { DB } from "../../integrations/db/db"
import { AccountQuerier } from "../IAM/AccountQuerier"
import { AccountRespository } from "../IAM/AccountRepository"
import { env } from "../../integrations/env/env"

export class App {
  public env = env(process.env)

  public contextService = new ContextService()

  private db = new DB()

  private accountRepository = new AccountRespository(this.db)

  public accountQuerier = new AccountQuerier(this.accountRepository)

  dbsync() {
    return this.db.sync()
  }

  init() {
    return this.db.init()
  }
}
