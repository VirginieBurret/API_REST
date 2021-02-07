const User  = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;


// créer un nouvel utilisateur
exports.register = (req,res) => {
const { password, email, username } = req.body;

    //crypter mon mdp
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const user = new User() // j'ai créer une nouvelle instance de User, donc mtnt je peux voir ce qu'il se passe dedans
    // user.username = ce qu'il y a dans notre modele / req.body.username = requete de l'utilisateur( ce qu'il soumet dans le form d'inscription)
    user.username = username //req.body.username;
    user.email = email //req.body.email;
    user.password = hash;
    // La on a stocké les infos de l'user, mtnt il faut les sauvegarder
console.log(user);


    user.save((error)=> {
        if(!error){
            console.log(error);
            
            res.status(201).json({user: user._id})
        }

        else{
            console.log(error);
            res.status(200).json('erreur')
        }
    })
    });


    // mettre le mdp hashé dans la const hash et utiliser la constante hash instead of req.body.password
    
}

//se connecter, donc chercher un nouvel utilisateur
exports.login = (req,res) =>   {
    const { password, email, username } = req.body;

User.findOne({username}).select('-password') // ça cherche l'user PUIS    -password pour ne pas afficher le mpd dans la requete car le front n'a pas besoin du mdp
.then((user) => {
    if(!user){
        return res.status(401).json('user not found')
    }
    // comparer le mdp de req.boy.password avec notre mdp dans la BDD avec  user.password (le mdp) PUIS (.then(valid) => {
        // si c'est pas valid return 401 mdp incorrect
        //si  c valid res.statut(user).
    })
    return res.status(200).json(user)
    console.log(user);
    
}







    //User.findOne({username}, function(err, result){      //{username:username } = username(propriété du modèle) + ce que je veux mettre dedans (req.body.username) et moi je l'ai destructuré donc je peux utiliser la shorty property pour juste utiliser username
        //if(err) throw err;    //There was an error with the database.
        //if(!result) console.log("erreur"); //The query found no results.
       // else {
            //console.log(result.username); 
       // }
   // }

    //)
}
