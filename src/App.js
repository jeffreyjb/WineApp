import React, { Component, Fragment } from 'react';

import NavBar from './containers/Navigation/NavBar/NavBar';
import WineCatalog from './containers/WineCatalog/WineCatalog';

class App extends Component {
  render() {
    return (
      <Fragment>
        <NavBar/>
        <WineCatalog/>
      </Fragment>
    );
  }
}

export default App;
