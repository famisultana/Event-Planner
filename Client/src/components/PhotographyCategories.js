import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Grid, Button } from 'semantic-ui-react';

class PhotographyCategories extends Component {
    render() {
        return (
            <Grid.Column className='category-item' mobile={15} tablet={7} computer={5}>
                <img src={this.props.image} />
                <h2>{this.props.header}</h2>
                <Button>Book Now</Button>
            </Grid.Column>
        );
    }
}

export default PhotographyCategories;