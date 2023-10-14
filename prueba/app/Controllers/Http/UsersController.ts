import User from 'App/Models/User'
import Post from 'App/Models/Post'
import Coment from 'App/Models/Coment'
import Database from '@ioc:Adonis/Lucid/Database'

class UserController {
  async users({ response }) {
    const users = await User.all()
    return response.status(200).json(users)
  }

  async users_posts({ response }) {
    const users = await User.query().with('posts').fetch()    
    return response.status(200).json(users)
  }
  
  
}

module.exports = UserController
