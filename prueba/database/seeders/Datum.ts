import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Coment from 'App/Models/Coment'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'virk@adonisjs.com',
        password: 'secret',
        nombre: 'Virk',
        edad: 30, 
      },
      {
        email: 'romain@adonisjs.com',
        password: 'supersecret',
        nombre: 'Romain',
        edad: 28, 
      },
      {
        email:'elbisho@realmadrid.com',
        password:'papademessi',
        nombre:'Cristiano',
        edad:34,
      },
      {
        email:'lapulga@friercelona.com',
        password:'copaposesion',
        nombre:'Messi',
        edad:33,
      },
      {
        email:'godguire@thebest.com',
        password:'elcapitan',
        nombre:'Harry',
        edad:36,
      },
      {
        email:'belligod@realmadrid.com',
        password:'tengo19ysoypadre',
        nombre:'Jude',
        edad:19,
      },
    ])
  
    await Post.createMany([
      {
        encabezado:"Toy cansado jefe",
        user_id:2,
      },
      {
        encabezado:"Ya vamonos",
        user_id:3,
      },
      {
        encabezado:"Duerman a aranda",
        user_id:6,
      },
      {
        encabezado:"I can't breath -- Disney",
        user_id:1,
      },
      {
        encabezado:"Tengo ganas de papear a un chamaco en valorant",
        user_id:4,
      },
      {
        encabezado:"que asco los que juegan lol, sin ofender profe",
        user_id:5,
      },
      {
        encabezado:"roblox es para enfermos o para niños",
        user_id:1,
      },
      {
        encabezado:"pura fichita en el a y en el c",
        user_id:3,
      },
    ])

    await Coment.createMany([
      {
        contenido: 'JJAJAJAJ buen meme',
        user_id: 2,
        post_id: 3
      },
      {
        contenido: 'Yo tambien',
        user_id: 4,
        post_id: 1
      },
      {
        contenido: 'Si jala o no jala?',
        user_id: 3,
        post_id: 2
      },
      {
        contenido: 'Denme de baja paro',
        user_id: 1,
        post_id: 5
      },
      {
        contenido: 'Ocupo una 4070 pa la escuela',
        user_id: 4,
        post_id: 5
      },
    ])
  
  }
}