import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Post from './Post'

export default class Coment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contenido: string

  @belongsTo(()=>User, {
    foreignKey: 'user_id'
  })
  public user: BelongsTo < typeof User >

  @column()
  public user_id: number

  @belongsTo(()=>Post, {
    foreignKey: 'post_id'
  })
  public post: BelongsTo < typeof Post >

  @column()
  public post_id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
