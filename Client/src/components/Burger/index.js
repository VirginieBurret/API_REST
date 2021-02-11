import React from 'react';
import { stack as Menu } from 'react-burger-menu';
import './burger.scss';

const Burger = () => (
  <Menu>
    <a className="menu-item" href="#">
      Mes réalisations
    </a>
    <a className="menu-item" href="#">
      Télécharger mon cv
    </a>
    <a className="menu-item" href="#">
      Me contacter
    </a>

  </Menu>
);

export default Burger;
