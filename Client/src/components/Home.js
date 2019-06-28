import React, { Component } from 'react';
import About from './About';
import Slideshow from './Slideshow';
import Services from './Services';
import Ribbon from './Ribbon'
import ImageRibbon from './ImageRibbon'

class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                <About />
                <Ribbon />
                <Services />
                <ImageRibbon />
            </div>
        );
    }
}

export default Home;