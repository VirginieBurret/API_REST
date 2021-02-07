const mongoose = require('mongoose');
const {schema} = mongoose.Schema;

const { isEmail } = require('validator');


const userSchema = new mongoose.Schema({ 
    username: {
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    email:{
        validate:[isEmail], //valider si c'est un email avec le validator 
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    password:{
        type:String,
        required:true
        
    },
},

   {
     timestamps: true, // créer automatiquement un created at et update at dans la bdd TOUJOURS QUAND ON CREER QQCH
   }
);

const User = mongoose.model("User", userSchema)
module.exports = User