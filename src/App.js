
import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import reactDom from 'react-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
      </div>
    )
  };
}

export default App;
