import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ServiceItem extends Component {
  render() {
    let button;
    if (this.props.link) {
      button = (
        <Link to={this.props.link}>
          <button>View Details</button>
        </Link>
      );
    }

    if (this.props.position === "right") {
      return (
        <Grid.Row className="service-block">
          <Grid.Column
            className="service-item service-info"
            mobile={16}
            computer={7}
          >
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>

            {button}
          </Grid.Column>
          <Grid.Column className="service-item" mobile={16} computer={7}>
            <img src={this.props.image} />
          </Grid.Column>
        </Grid.Row>
      );
    }
    if (this.props.position === "left") {
      return (
        <Grid.Row className="service-block">
          <Grid.Column className="service-item" mobile={16} computer={7}>
            <img src={this.props.image} />
          </Grid.Column>
          <Grid.Column
            className="service-item service-info"
            mobile={16}
            computer={7}
          >
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>
            {button}
          </Grid.Column>
        </Grid.Row>
      );
    }
  }
}
