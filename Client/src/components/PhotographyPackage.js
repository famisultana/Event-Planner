import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';

class PhotographyPackage extends Component {
    
    renderList(){
            return <li>abc</li>
        }
    
    render() {
        return (
            <Grid.Column className='package-item' mobile={15} tablet={15} computer={5}>
                <h3 className='package-name'>{this.props.name}</h3>
                <span className='package-price'>Rs. 
                    <span >{this.props.price}</span>
                    <h3>per day</h3>
                </span>
                <ul className='package-inclusions'>
                    {this.renderList()}
                </ul>
                <button className='package-button'>Add to Cart</button>
            </Grid.Column>
        );
    }
}

export default PhotographyPackage;