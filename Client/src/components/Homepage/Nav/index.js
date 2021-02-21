import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import './nav.scss';

const Nav = ({ isNotLogged }) => (
  <nav className="nav">
    <div className="nav__logo">
      <Link style={{ color: 'white' }} to="/"> <li>LOGO</li></Link>
    </div>

    <ul className="nav__linkList">
      <Link style={{ color: 'white' }} to="/bouger"> <li>Bouger</li></Link>
      <Link style={{ color: 'white' }} to="/manger"><li>Manger</li></Link>
      <Link style={{ color: 'white' }} to="/respirer"> <li>Respirer</li></Link>
    </ul>
    <div className="nav__buttons">

      <Button className="nav__buttons__button" inverted color="violet">
        <Link className="buttonLink" to="/login">  Connexion</Link>
      </Button>

      <Button className="nav__buttons__button" inverted color="purple">
        <Link className="buttonLink" to="/register">Inscription</Link>
      </Button>

    </div>
  </nav>
);

Nav.propTypes = {

};

export default Nav;

// {isNotLogged && (
// <Button className="nav__buttons__button" inverted color="violet">
// Connexion
// </Button>
// )}

// si isNotLogged est vrai il affiche le bouton sinon il n'affiche pas le bouton
