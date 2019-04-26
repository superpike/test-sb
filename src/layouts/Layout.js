import React, { Component } from 'react';
import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import MainPage from '../pages/MainPage';
import FundPage from '../pages/FundPage';

class Layout extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/funds/:id" component={FundPage} />

          <Route path="*"><Redirect to="/" /></Route>
        </Switch>
      </>
    );
  }
}

export default Layout;
