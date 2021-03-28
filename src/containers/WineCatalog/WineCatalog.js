import React, { Component, Fragment } from 'react';

import WineTable from '../../components/WineTable/WineTable';

// import classes from './WineCatalog.module.css';

class WineCatalog extends Component {
  render() {
    return (
      <Fragment>
        <WineTable></WineTable>
      </Fragment>
    );
  }
}

export default WineCatalog;