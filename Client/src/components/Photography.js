import React, { Component } from 'react';
import img1 from '../images/photography/1.jpg';

class Photography extends Component {
    render() {
        return (
            <div className="photography-section">
                <div className='header-image'>
                    <img src={img1}/>
                </div>
                <div className='header-text'>
                <h1>The easiest and most affordable way to book a great photographer</h1>
                <button>Book a photographer now</button>
                </div>
            </div>
        );
    }
}

export default Photography;