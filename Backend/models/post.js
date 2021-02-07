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
    createdAt:{
        type:String,
        index:true,
        unique:true
    },
    author:String,
    category:String
})

const Post = mongoose.model("Post", postSchema)
module.exports = Post