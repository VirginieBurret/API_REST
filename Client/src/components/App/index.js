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

// == Composant
const App = () => (
  <div className="app">

    <Route exact path="/" component={Homepage} />
    <Route exact path="/bouger" component={Bouger} />
    <Route exact path="/manger" component={Manger} />
    <Route exact path="/respirer" component={Respirer} />
  </div>
);

// == Export
export default App;
