import React, { Component } from 'react';
import About from './About';
import Slideshow from './Slideshow';
import Services from './Services';
import Ribbon from './Ribbon'
import ImageRibbon from './ImageRibbon'
import Footer from './Footer'

class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                <About />
                <Ribbon />
                <Services />
                <ImageRibbon />
                <Footer />
            </div>
        );
    }
}

export default Home;