import React, { Component } from 'react';

class Button extends Component {
    render() {
        return (
            <button variant="outline-info">
                <span>{this.props.title}</span>
                <i class="fas fa-chevron-right"></i>
                <i class="fas fa-chevron-right"></i>
                </button>
        );
    }
}

export default Button;