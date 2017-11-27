import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Explorer from './Explorer';
import Person from './Person';
import Sorry from 'components/Sorry';

const App = () => (
  <Switch>
    <Route exact path='/' component={Explorer}/>
    <Route path='/person/:id' component={Person}/>
    <Route render={() => <Sorry but="the page was not found" />} />
  </Switch>
);

export default App;
