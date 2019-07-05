import React, { Component } from 'react';
import Info from './Info';
import Slideshow from './Slideshow';
import Services from './Services';
import Ribbon from './Ribbon'
import ImageRibbon from './ImageRibbon'

class Home extends Component {
    render() {
        return (
            <div>
                <Slideshow />
                <Info />
                <Ribbon />
                <Services />
                <ImageRibbon />
            </div>
        );
    }
}

export default Home;