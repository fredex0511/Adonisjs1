import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'

export default class Coment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @hasOne(()=>User)
  public user: HasOne < typeof User >

  @hasOne(()=>Post)
  public post: HasOne < typeof Post >

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
