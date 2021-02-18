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
import ModalRegister from '../Homepage/Modales/register_AVEC_COMPONENT_FIELD';
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
  </div>
);

// == Export
export default App;
