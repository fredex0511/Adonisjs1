import User from 'App/Models/User'
import CreateUserValidator from 'App/Validators/CreateUserValidator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

  export default class UserController {
    public async index({ response }:HttpContextContract) {

      const users = await User.query().preload('post').preload('coment').exec()
  
      response.ok(users)
    }

    public async allusers({ response }:HttpContextContract) {

      const users = await User.query().exec()
  
      response.ok(users)
    }

    public async crud({ response, request, params }:HttpContextContract ){
      const metodo  = request.method()
      const id = params.id



      if (metodo == "GET"){
        try{
          const userid = await User.findOrFail(id)
          response.ok(userid)
        }catch(error){
          response.badRequest("Usuario no Encontrado")
        }

      }else if(metodo == "DELETE"){
        try{
          const userid = await User.findOrFail(id)
          userid.estado="inactivo"
          userid.save()
          response.ok("Usuario Eliminado")
        }catch(error){
          response.badRequest("Usuario no encontrado")
        }
      }else if(metodo == "POST"){
        try{
          try{
            await request.validate(CreateUserValidator);
          }catch(error){
            return response.badRequest(error.messages)
          }
          const datos = request.only(["nombre","edad","email","estado","password"])
          const user = await User
          const usernv = new user()
          usernv.nombre = datos.nombre
          usernv.edad = datos.edad
          usernv.email = datos.email
          usernv.estado = datos.estado
          usernv.password = datos.password
          usernv.save()
          response.ok("Usuario creado de manera exitosa")
        }catch(error){
          response.badRequest("Ingrese minimo los datos: nombre, edad, email")
        }
      }else if(metodo == "PUT"){
        try{
          const userid = await User.findOrFail(id)
          const datos = request.only(["nombre","edad","email","estado","password"])
          if(datos.nombre) userid.nombre = datos.nombre
          if(datos.edad) userid.edad = datos.edad
          if(datos.email) userid.email = datos.email
          if(datos.estado) userid.estado = datos.estado
          if(datos.password) userid.estado = datos.estado
          userid.save()
          response.ok("Usuario actualizado correctamente")
        }catch(error){
          response.badRequest("Usuario no encontrado")
        }
      }
    }
  }
  
