import React, { Component } from 'react';
import PageHome from './PageHome';
import MainPage from './MainPage';
import { Switch, Route } from 'react-router-dom';

class App extends Component {

  render() { 
    return ( 
      <Switch>
        <Route 
          exact path="/"
          component={PageHome}
        />
        <Route 
          exact path="/main"
          component={MainPage}
        />
      </Switch>
     );
  }
}
 
export default App;