const Post=require('../models/post');

  exports.showPosts = (req, res) => { // récupérer tous les posts
    Post.find({}, (error,posts) => {
      if (error) {
       res.status(400).error(error)
       return
      }
      console.log(req)
      console.log(posts);
      res.send(posts)
    })
  }

  exports.showPostById = (req, res) => { // récupérer un post grâce à son id
      const id = req.params.id
      Post.findById(id, (error,post) => {

        if(error || !post){
          res.status(400).send({
            error:true,
            message: "Post not found"
          })

        }else{
          res.status(200).send({
            reponse: post
          })
        }
      })
  }

  exports.addPost = (req, res) => { // ajouter un post en BDD : via un formulaire en front : body
    const post = new Post()
    post.title = req.body.title
    post.content = req.body.content
    post.author = req.body.author
    post.category = req.body.category

    // La on a stocké les infos que l'user a tapé dans les input, mtnt il faut les sauvegarder
    post.save((error) => {
      if(!error){
        console.log(error);
        
        res.status(201).json({user: user._id})
    }

    else{
        console.log(error);
        res.status(200).json('erreur')
    }
    })
  };