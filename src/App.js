import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './containers/Homepage/Homepage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
      </div>
    );
  }
}

export default App;
