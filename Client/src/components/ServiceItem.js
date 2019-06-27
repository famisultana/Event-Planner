import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/home.css'

var key = 1;

export default class ServiceItem extends Component {
  render() {
    return (

<div>
<Row className='service-block'>
        <Col className='service-item' sm={11} md={5}>
          <img src={this.props.image} />

        </Col>
        <Col className='service-item service-info' sm={11} md={5}>
          <h2>{this.props.header}</h2>
          <p>{this.props.content}</p>
          <button>
            View Details
          </button>
        </Col>
      </Row>

<Row className='service-block'>
<Col className='service-item service-info' sm={11} md={5}>
  <h2>{this.props.header}</h2>
  <p>{this.props.content}</p>
  <button>
    View Details
  </button>
</Col>
<Col className='service-item' sm={11} md={5}>
  <img src={this.props.image} />

</Col>

</Row>
</div>


    )
  }
}
