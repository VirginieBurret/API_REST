import React from 'react';
import Nav from '../Homepage/Nav';
import './userIsConected.scss';

const Adventure = ({ props = 'Main' }) => ( // par défaut on lui passe la main 
  <div className="Adventure">
    <Nav />
    {(props === 'Main') && <Main /> }
    
  </div>
);

// si ce qui ya a gauche c true => on affiche le composant à droite
export default Adventure;
