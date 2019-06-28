import React, { Component } from 'react';
import img1 from '../images/photography/1.jpg';
import MainHeading from './MainHeading';
import { Container, Row ,Col} from 'react-bootstrap';
import img4 from "../images/services4.jpg";

class Photography extends Component {
    render() {
        return (
            <div>
                <div className="photography-section">
                <div className='header-image'>
                    <img src={img1}/>
                </div>
                <div className='header-text'>
                <h1>The easiest and most affordable way to book a great photographer</h1>
                <button>Book a photographer now</button>
                </div>
            </div>
            <MainHeading text="Photography Categories"/>
            <Container>
                <Row>
                    <Col>
                    <img src={img4}/>
                    </Col>
                    <Col>
                    <Row>
                    <img src={img4}/>
                    </Row>
                    <Row>
                    <img src={img4}/>
                    </Row>
                    </Col>
                </Row>
                
            </Container>
            </div>
        );
    }
}

export default Photography;