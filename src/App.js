import React, { Component } from 'react';
import HeaderBar from './components/header/HeaderBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <HeaderBar />
        </div>
        <div className="body">
          <h3>Home</h3>
        </div>
      </div>
    );
  }
}

export default App;
