import React from 'react';
import { render } from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

import App from './components/App/App';
import NotFound from './components/App/NotFound';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';

import Map from './components/Map/Map';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/map" component={Map}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>

        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
