import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, BelongsTo, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Coment from './Coment'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public encabezado: string

  @belongsTo(()=>User ,{
    foreignKey: 'user_id'
  })
  public user:BelongsTo < typeof User >

  @hasMany(()=>Coment, {
    foreignKey: 'post_id'
  })
  public coment:HasMany<typeof Coment>

  @column()
  public user_id:number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
