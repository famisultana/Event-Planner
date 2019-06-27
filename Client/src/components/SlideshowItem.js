import React, { Component } from 'react';
import "../styles/slideshow.css";
import Button from './Button';

export default class SlideshowItem extends Component {
  render() {
    return (
        <div className="each-fade">
        <div className="image-container">
          <img src={this.props.image} />
          <div className="content">
                    <h2>{this.props.header}</h2>
                    <p>{this.props.caption}</p>
            <Button title={this.props.button}/>
          </div>
        </div>
      </div>
    )
  }
}
