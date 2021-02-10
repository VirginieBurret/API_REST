const express = require('express')
require('./config/DB');
require('dotenv').config({path: 'config/.env'});
const app = express()


// nos routes
const postsRoutes = require("./routes/postsRoutes")
const usersRoutes = require("./routes/usersRoutes")

// ! ! ! ! POUR LIRE LES REQ.BODY ON A BESOIN DE BODY PARSER (comme cookie parser pour signer les cookies) ! ! ! 
// bien lire la doc
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())



app.use('/api/posts', postsRoutes) // ça c'est la base de mon url pour les posts ()
app.use('/api/users', usersRoutes)

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})


//app.use(('/api', (req, res) => {
 // res.send(`<p> Si vous êtes ici, le server fonctionne!!!</p>
 //<ul>
//<li>Lister tous les posts : <a href="/api/posts"> /api/posts</a></li>
//<li>Naviguer vers un post en particulier : <a href="/api/post/1"> /api/post/:id</a></li>
//  </ul>`)
//}))
//app.use dans toute l'application

//app.get

//app.get('/api', (req, res) => {
  //res.send('Mon API')
//})



//app.get('/api/post/:id', (req, res) => { // pour récupérer 1 post en particulier
  //const id = req.params.id
  //Post
  
//})
