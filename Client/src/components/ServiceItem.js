import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import '../styles/home.css'

var key = 1;

export default class ServiceItem extends Component {
    render() {
        console.log(this.props)
    return (
      
        <Col className='service-item' xl={4} md={6}>
            <img src={this.props.image}/>
            <span>{key++}</span>
            <h2>{this.props.header}</h2>
            <p>{this.props.content}</p>
 
    </Col>

      
    )
  }
}
