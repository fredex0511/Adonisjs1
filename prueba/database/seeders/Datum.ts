import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Post from 'App/Models/Post'

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
        user:2,
      },
      {
        encabezado:"Ya vamonos",
        user:3,
      },
      {
        encabezado:"Duerman a aranda",
        user:6,
      },
      {
        encabezado:"I can't breath -- Disney",
        user:1,
      },
      {
        encabezado:"Tengo ganas de papear a un chamaco en valorant",
        user:4,
      },
      {
        encabezado:"que asco los que juegan lol, sin ofender profe",
        user:5,
      },
      {
        encabezado:"roblox es para enfermos o para niños",
        user:1,
      },
      {
        encabezado:"pura fichita en el a y en el c",
        user:3,
      },
    ])

    await Coment.createMany([
      {
        
      }
    ])
  
  }
}