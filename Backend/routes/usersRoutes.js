const express = require('express')
const Router = express.Router()
const usersController = require('../Controllers/usersController')



Router.post('/register', usersController.register)
//                  nom du controller + nom de la method, on met la logique dedans pour ne pas mélanger routes et fonctions
//Router.get('/', usersController.showUsers)  // pour le backoffice
//Router.get('/:id', usersController.showUserById) //utilisateur a accès à son profil

 
Router.post('/login', usersController.login)
 module.exports=Router;