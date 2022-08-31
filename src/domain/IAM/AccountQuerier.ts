import { IContext } from "../context/ifc/context"
import { AccountRespository } from "./AccountRepository"

export class AccountQuerier {
  constructor(private accountRepository: AccountRespository) {}

  getById(ctx: IContext, id: string) {
    return this.accountRepository.getById(ctx, id)
  }
}
