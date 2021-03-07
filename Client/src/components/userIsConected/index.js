import React from 'react';
import Nav from '../../components/Homepage/Nav';
import './userIsConected.scss';
import Main from '../userIsConected/Main';

const UserIsConected = ({ props = 'Main' }) => ( // par défaut on lui passe la main 
  <div className="Adventure">
    <Nav />
    {(props === 'Main') && <Main /> }
    
  </div>
);

// si ce qui ya a gauche c true => on affiche le composant à droite
export default UserIsConected;
