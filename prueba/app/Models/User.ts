import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, BaseModel, hasMany, HasMany} from '@ioc:Adonis/Lucid/Orm'
import Post from './Post'
import Coment from './Coment'


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nombre: string

  @column()
  public edad: number

  @column()
  public email: string

  @column()
  public estado : string

  @hasMany(()=>Post, {
    foreignKey: 'user_id'
  })
  public post:HasMany<typeof Post>

  @hasMany(()=>Coment, {
    foreignKey: 'user_id'
  })
  public coment:HasMany<typeof Coment>


  @column({ serializeAs: null })
  public password: string


  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
