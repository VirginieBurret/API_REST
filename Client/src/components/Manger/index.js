import React from 'react';
import { Link } from 'react-router-dom';
import '../Manger/nomatch.scss';

const Contact = () => (
  <div className="nomatch">
    <div className="nomatch__text">
      
    <h1><span>"OU</span><span>PS !!"</span></h1>

      <h3 className="nomatch__text__titleSmall">Tu t'es perdu Petit Explorateur ?</h3>

      <p className="nomatch__text__content">⚠ ERREUR 404 ⚠: La page que vous recherchez semble introuvable</p>

      <Link to="/"><button className="learn-more" type="button">Retourner à la page d'accueil</button></Link>

    </div>
    <div className="nomatch__picture">
      <img src="https://media.istockphoto.com/vectors/nerd-boy-holding-a-magnifying-glass-vector-id491824846?k=6&m=491824846&s=612x612&w=0&h=GBRvQ7BXFOR4u5CUKJt874iuB1Npc8a8u4cUyCAtfrg=" alt="404picture" />
    </div>
  </div>
);

export default Contact;
