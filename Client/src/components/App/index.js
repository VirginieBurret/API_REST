// == Import npm
import React from 'react';
// == Import
import { Switch, Route } from 'react-router-dom';
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';
import IsNotLoggedRoutes from './isNotLoggedRoutes';
import IsLoggedRoutes from './isLoggedRoutes';
// == Composant

const App = ({isLogged}) => (
  <div className="app">
    {isLogged ? <IsLoggedRoutes /> : <IsNotLoggedRoutes />}
  </div>
);

export default App;
