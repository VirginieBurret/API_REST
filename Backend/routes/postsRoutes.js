const express = require('express')
const Router = express.Router()
const postsController = require('../Controllers/postsController')


//                  nom du controller + nom de la method, on met la logique dedans pour ne pas mélanger routes et fonctions
Router.get('/', postsController.showPosts)  
Router.get('/:id', postsController.showPostById)

 
 module.exports=Router;