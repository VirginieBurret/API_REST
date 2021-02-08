const mongoose = require('mongoose');
const {schema} = mongoose.Schema;

const postSchema = new mongoose.Schema({ 
    title: {
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    
    author:String,
    category:String
    
},
{
    timestamps: true, // créer automatiquement un created at et update at dans la bdd TOUJOURS QUAND ON CREER QQCH
  }
);

const Post = mongoose.model("Post", postSchema)
module.exports = Post