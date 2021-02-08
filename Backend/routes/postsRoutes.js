const express = require('express')
const Router = express.Router()
const postsController = require('../Controllers/postsController')



//methods GET pour récupérer des infos
//                  nom du controller + nom de la method, on met la logique dedans pour ne pas mélanger routes et fonctions
Router.get('/', postsController.showPosts)  
Router.get('/:id', postsController.showPostById)


Router.post('/add', postsController.addPost)
 
 module.exports=Router;