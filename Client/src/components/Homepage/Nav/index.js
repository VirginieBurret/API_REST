import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__linkList">
      <Link style={{ color: 'white' }} to="/"> <li>LOGO</li></Link>
      <Link style={{ color: 'white' }} to="/bouger"> <li>Bouger</li></Link>
      <Link style={{ color: 'white' }} to="/manger"><li>Manger</li></Link>
      <Link style={{ color: 'white' }} to="/respirer"> <li>Respirer</li></Link>
    </ul>
    <div className="nav__button">
      <Button inverted color="violet">
        Connexion
      </Button>

      <Button inverted color="purple">
        <Link className="buttonLink" to="/register">Inscription</Link>
      </Button>
    </div>
  </nav>
);

Nav.propTypes = {

};

export default Nav;
