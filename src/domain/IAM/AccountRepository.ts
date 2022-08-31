import { IContext } from "../context/ifc/context"
import { DB } from "../../integrations/db/db"
import { Account } from "./entities/account"

export class AccountRespository {
  constructor(private db: DB) {}

  getById(ctx: IContext, id: string) {
    return this.db.getRepository(Account).findOne({ where: { id } })
  }
}
