import React, { Component } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Slideshow />
        <Header />
      </div>
    );
  }
}

export default App;
