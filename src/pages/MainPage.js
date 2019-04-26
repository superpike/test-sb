import React, { Component } from 'react';

import FundsList from '../containers/FundsList';

import classes from './MainPage.module.css';

class MainPage extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className={classes.mainPage}>
        <div className={classes.header}>
          Фонды
        </div>
        <FundsList />
      </div>
    );
  }
}

export default MainPage;
