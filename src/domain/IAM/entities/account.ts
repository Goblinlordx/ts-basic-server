import {
  Column,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from "typeorm"

@Entity()
export class Account {
  constructor(data: Partial<Account>) {
    Object.assign(this, data)
  }

  @PrimaryColumn("uuid")
  id!: string

  @Column("text")
  email!: string

  @OneToOne(() => AccountBasicAuth, (o) => o.account)
  basicAuth?: AccountBasicAuth
}

@Entity()
@Index(["email", "password"])
export class AccountBasicAuth {
  constructor(data: Partial<AccountBasicAuth>) {
    Object.assign(this, data)
  }

  @PrimaryColumn("uuid")
  id!: string

  @OneToOne(() => Account, (o) => o.basicAuth)
  @JoinColumn()
  account!: Account

  @Column("text")
  email!: string

  @Column("text")
  password!: string
}
