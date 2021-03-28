import React, { Component } from 'react';

import classes from './NavBar.module.css';

class NavBar extends Component {
  render() {
    return (
      <div className={classes.NavBar}>
        <p>Dad's Wine Collection</p>
      </div>
    );
  }
}

export default NavBar;