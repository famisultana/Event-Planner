import React, { Component } from 'react';

class MainHeading extends Component {
    render() {
        return (
                <h1 className="main-heading">{this.props.text}</h1>
        );
    }
}

export default MainHeading;