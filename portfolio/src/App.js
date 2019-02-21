import React from 'react';
import { Switch, Route} from 'react-router-dom';

import Navigation from "./components/NavigationBar.js";
import Home from "./components/Home.js";
import About from "./components/About.js";
import Contact from "./components/Contact.js";

  //Determins the order of each element
    const App = () => (
      <div className='app'>
        <Navigation />
        <Main />
      </div>
    );

//Gives routes for the navigation
    const Main = () => (
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contact' component={Contact}></Route>
      </Switch>
    );

    export default App;
