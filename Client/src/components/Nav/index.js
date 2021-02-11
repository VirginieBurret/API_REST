import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';
import { Button, Segment } from 'semantic-ui-react';
import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <ul className="nav__linkList">
      <li>
        LOGO
      </li>
      <li>
        Accueil
      </li>
      <li>
        Bouger
      </li>
      <li>
        Manger
      </li>
      <li>
        Respirer
      </li>
    </ul>
    <div className="nav__button">
      <Button inverted color="violet">
        Connexion
      </Button>

      <Button inverted color="purple">
        Inscription
      </Button>
    </div>
  </nav>
);

Nav.propTypes = {

};

export default Nav;
