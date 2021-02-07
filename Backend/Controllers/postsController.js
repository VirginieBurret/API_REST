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

  exports.showPostById = (req, res) => {
      
  }