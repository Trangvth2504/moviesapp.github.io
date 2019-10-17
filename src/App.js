import React, { Component } from 'react';
import Header from './Header';
import Slideshow from './Slideshow';
import HeaderBottom from './Header/HeaderBottom';
import HomeContent from './Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Slideshow />
        <HeaderBottom />
        <HomeContent />
      </div>
    );
  }
}

export default App;
