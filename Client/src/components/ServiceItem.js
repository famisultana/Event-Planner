import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Grid, Image } from 'semantic-ui-react';
import '../styles/home.css'

var key = 1;

export default class ServiceItem extends Component {

  renderItem = () => {

  }


  render() {
    if (this.props.position === 'right') {
      return (
        <Grid.Row className='service-block'>

          <Grid.Column className='service-item service-info' mobile={16} computer={7}>
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>
            <button>
              View Details
        </button>
          </Grid.Column>
          <Grid.Column className='service-item' mobile={16} computer={7}>
            <img src={this.props.image} />

          </Grid.Column>
        </Grid.Row>
      )
    }

    if (this.props.position === 'left') {
      return (
        <Grid.Row className='service-block'>
          <Grid.Column className='service-item' mobile={16} computer={7}>
            <img src={this.props.image} />

          </Grid.Column>
          <Grid.Column className='service-item service-info' mobile={16} computer={7}>
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>
            <button>
              View Details
          </button>
          </Grid.Column>
        </Grid.Row>

      )
    }
  }
}
