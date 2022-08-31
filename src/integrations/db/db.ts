import "reflect-metadata"
import { IContext } from "../../domain/context/ifc/context"
import { DataSource, EntityTarget, ObjectLiteral } from "typeorm"
import { Account, AccountBasicAuth } from "../../domain/IAM/entities/account"

export class DB {
  private ds: DataSource
  private ctxMap = new WeakMap<IContext, string>()

  constructor(/* ...entities: Function[] */) {
    this.ds = new DataSource({
      type: "sqlite",
      database: "./db.sqlite",
      logging: true,
      entities: [Account, AccountBasicAuth],
    })
  }

  init() {
    return this.ds.initialize()
  }

  sync() {
    return this.ds.synchronize()
  }

  getRepository(ent: EntityTarget<ObjectLiteral>) {
    return this.ds.getRepository(ent)
  }
}
