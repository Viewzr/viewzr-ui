import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderBar from './components/header/header-bar';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderBar />
        <h1>Home Page</h1>
      </div>
    );
  }
}

export default App;
