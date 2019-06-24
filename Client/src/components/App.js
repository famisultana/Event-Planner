import React, { Component } from 'react';
import Menu from './Menu';
import About from './About';
import Footer from './Footer';
import Slideshow from './Slideshow';
import Services from './Services';
import Ribbon from './Ribbon'
import ImageRibbon from './ImageRibbon'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Menu />
       <Slideshow/>
        <About />
        <Ribbon/>
        

     
        <Services/>
        <ImageRibbon />
        <Footer/>
      </div>
    );
  }
}

export default App;
