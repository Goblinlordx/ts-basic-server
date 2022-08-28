import { ContextService } from "../context/ContextService"
import { DB } from "../integrations/db/db"
import { AccountQuerier } from "../user/AccountQuerier"
import { AccountRespository } from "../user/AccountRepository"

export class App {
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
