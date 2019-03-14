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
import Contact from './components/Contact/Contact';

import Map from './components/Map/Map';
import Map0 from './components/Map/Map0';

render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/SendRequest" component={Map}/>
        <Route path="/SRT" component={Map0}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/contact" component={Contact}/>

        <Route component={NotFound}/>
      </Switch>
    </App>
  </Router>
), document.getElementById('app'));
