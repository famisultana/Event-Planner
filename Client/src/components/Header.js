import React, { Component } from "react";

import Card from "react-bootstrap/Card";

export default class Header extends Component {
  render() {
    return (
      <div>
        <Card className="bg-dark text-white image-header" >
          <Card.Img
            src={this.props.image}
            alt="Card image"
            style={{
              height: "200px"
            }}
          />
          <Card.ImgOverlay>
            <Card.Title>
              <h1> {this.props.title} </h1>
            </Card.Title>
            <Card.Text>{this.props.text}</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
  }
}
