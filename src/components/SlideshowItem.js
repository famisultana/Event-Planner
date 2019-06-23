import React, { Component } from 'react';
import "../styles/slideshow.css";
import { Button } from 'react-bootstrap';

export default class SlideshowItem extends Component {
  render() {
    return (
        <div className="each-fade">
        <div className="image-container">
          <img src={this.props.image} />
          <div className="content">
                    <h2>{this.props.header}</h2>
                    <p>{this.props.caption}</p>
            <button variant="outline-info"><span>{this.props.button}</span><i class="fas fa-chevron-right"></i><i class="fas fa-chevron-right"></i></button>
          </div>
        </div>
      </div>
    )
  }
}
