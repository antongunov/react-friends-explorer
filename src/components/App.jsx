import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import Person from './Person';
import Sorry from './Sorry';

const App = () => (
  <Switch>
    <Route exact path='/' component={Home}/>
    <Route path='/person/:id' component={Person}/>
    <Route render={() => <Sorry but="the page was not found" />} />
  </Switch>
);

export default App;
