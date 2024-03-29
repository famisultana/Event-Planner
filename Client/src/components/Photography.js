import React, { Component } from 'react';
import MainHeading from './MainHeading';
import { Grid } from 'semantic-ui-react';
import PhotographyCategories from './PhotographyCategories';
import img1 from '../images/photography/1.jpg'
import portrait from '../images/photography/portrait.jpg';
import family from '../images/photography/family.jpg';
import event from '../images/photography/event.jpg';
import graduation from '../images/photography/graduation.jpg';
import estate from '../images/photography/estate.jpg';
import product from '../images/photography/products.jpg';
import PhotographyPackage from './PhotographyPackage';


const list=['15 Pages Album','13 X 32 size for Portrait Shoot', 'Unlimited Photo Coverage with Soft Copies','Digital Video Coverage with 2 Video Cameras'];

class Photography extends Component {
    render() {
        
        return (
            <div>
                <div className="photography-section">
                    <div className='header-image'>
                        <img src={img1} />
                    </div>
                    <div className='header-text'>
                        <h1>The easiest and most affordable way to book a great photographer</h1>
                        <button>Book a photographer now</button>
                    </div>
                </div>
                <MainHeading text="Photography Categories" />
                <Grid className="category-row" columns={3}>
                    <PhotographyCategories
                        image={portrait}
                        header="portrait" />
                    <PhotographyCategories
                        image={event}
                        header="event" />
                    <PhotographyCategories
                        image={family}
                        header="family" />
                    <PhotographyCategories
                        image={estate}
                        header="real estate" />
                    <PhotographyCategories
                        image={product}
                        header="products" />
                    <PhotographyCategories
                        image={graduation}
                        header="graduation" />
                </Grid>
                <MainHeading text='Photography Packages' />
                <Grid className='category-row' columns={3}>
                    <PhotographyPackage name='President Package' price='150,000' list={list}/>
                    <PhotographyPackage name='President Package' price='150,000' list={list}/>
                    <PhotographyPackage name='President Package' price='150,000' list={list}/>
                </Grid>
            </div>
        );
    }
}

export default Photography;