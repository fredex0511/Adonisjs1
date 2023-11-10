import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class CreateUserValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string([ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string([
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public schema = schema.create({
    nombre : schema.string([
      rules.minLength(3),
      rules.maxLength(50),
    ]),
    edad : schema.number([
      rules.range(18,50),
    ]),
    email : schema.string([
      rules.email(),
      rules.unique({table:'users', column: 'email'})
    ]),
    estado : schema.string([
    
    ]),
    password: schema.string([
      rules.confirmed(),
      rules.minLength(1),
      rules.maxLength(100)
    ])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    minLength: 'El campo {{ field }} debe tener el minimo de ',
    maxLength: 'El campo {{ field }} solo tiene un maximo de ',
    required: 'El campo {{ field }} es requerido para un nuevo usuario',
    unique: '{{field}} ya esta registrado',
    range: 'O estas muy chavo o muy viejo mi pa',
    'password.confirmed': 'Las contraseñas no coinciden'
  }
}
