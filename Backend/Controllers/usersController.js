const User  = require('../models/user');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken'); // npm install --save jsonwebtoken avant 

 //.select("-password ou name ou ce que je veux") =>mongoooooose
// créer un nouvel utilisateur
exports.register = async (req,res) => {
const { password, email, username } = req.body;

    //crypter mon mdp
   const hash = await bcrypt.hash(password, saltRounds) 
        const user = new User() // j'ai créer une nouvelle instance de User, donc mtnt je peux voir ce qu'il se passe dedans
    // user.username = ce qu'il y a dans notre modele / req.body.username = requete de l'utilisateur( ce qu'il soumet dans le form d'inscription)
    user.username = username //req.body.username;
    user.email = email //req.body.email;
    user.password = hash;
    // La on a stocké les infos de l'user, mtnt il faut les sauvegarder



    user.save((error)=> {
        if(!error){
            console.log(error);
            
            res.status(201).json({user: user._id})
        }

        else{
            console.log(error);
            res.status(200).json('erreur : username non disponible')
        }
    })
 
}

//se connecter, donc chercher un nouvel utilisateur
exports.login = (req,res) =>   {
    const { password, email, username } = req.body;

User.findOne({username})// ça cherche l'user PUIS    -password pour ne pas afficher le mpd dans la requete car le front n'a pas besoin du mdp
.then((user) => {
   
    if(!user){

        return res.status(401).json('user not found')
    }

    bcrypt.compare(req.body.password, user.password)
 
    
    .then(isValid => {
      
        if(!isValid){
            return res.status(401).json({error: 'Mot de passe incorrect'})
        }
        //avant de renvoyer la réponse je dois créer un token JWT (FAUDRA L'INSTALLER)
        // on va créer un cookie et on va stocker le token dans le cookie (COOKIE PARSER POUR LIRE LE COOKIE AVEC APP.USE DANS LE SERVER.JS COMME BODY PARSER)
        // TODO créer la const pour le token 
        res.status(200).json({
            userId: user._id,
            token: jwt.sign(
                { userId: user._id},
                'RANDOM_TOKEN_SECRET', 
                { expiresIn: '24h'}
            )
        }) //si mdp valide je renvoie l'id
       
    })
    .catch(error => res.status(500).json("1er catch"))
   
    })
.catch(error => res.status(500).json("2ème catch"))
  
    
}







    