import "reflect-metadata"
import { IContext } from "../../context/ifc/context"
import { DataSource, EntityTarget, ObjectLiteral } from "typeorm"
import { Account, AccountBasicAuth } from "../../user/entities/account"

export class DB {
  private ds: DataSource
  private ctxMap = new WeakMap<IContext, string>()

  constructor(...entities: Function[]) {
    this.ds = new DataSource({
      type: "sqlite",
      database: "./db.sqlite",
      synchronize: true,
      logging: true,
      entities: [Account, AccountBasicAuth],
    })
  }

  init() {
    return this.ds.initialize()
  }

  getRepository(ent: EntityTarget<ObjectLiteral>) {
    return this.ds.getRepository(ent)
  }
}
