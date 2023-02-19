import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import About from '../pages/Sobre';
import Contact from '../pages/Contato';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/sobre">
          <About />
        </Route>
        <Route path="/contato">
          <Contact />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
