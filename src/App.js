import React, { Component } from 'react';

import People from './components/People/People';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <People />
      </div>
    );
  }
}

export default App;
