import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Homepage from './containers/Homepage/Homepage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Layout>
            <Route path="/" exact component={Homepage} />
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
