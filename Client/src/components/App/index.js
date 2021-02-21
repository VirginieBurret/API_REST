// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Switch, Route } from 'react-router-dom';
// == Import
import './styles.scss';

import Homepage from '../Homepage';
import Bouger from '../Bouger';
import Manger from '../Manger';
import Respirer from '../Respirer';
import ModalRegister from '../../containers/Homepage/Modales/Register';
import ModalLogin from '../../containers/Homepage/Modales/Login';
// == Composant;
const App = () => (
  <div className="app">
    <Route exact path="/" component={Homepage} />
    <Route exact path="/bouger" component={Bouger} />
    <Route exact path="/manger" component={Manger} />
    <Route exact path="/respirer" component={Respirer} />
    <Route exact path="/register">
      <Homepage />
      <ModalRegister />
    </Route>
    <Route exact path="/login">
      <Homepage />
      <ModalLogin />
    </Route>
  </div>
);

// == Export
export default App;
