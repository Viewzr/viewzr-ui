import React, { Component } from 'react';
import NavBar from './components/header/NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <NavBar />
        </div>
        <div className="body">
          <h3>Home</h3>
        </div>
      </div>
    );
  }
}

export default App;
