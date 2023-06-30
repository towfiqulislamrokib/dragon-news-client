import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Brand1 from '../../../assests/brand/Brand1.png'
import Brand2 from '../../../assests/brand/Brand2.png'

const Brandcurousels = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 h-100"
                src={Brand1}
                alt="First slide"
                />
              
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 h-50"
                src={Brand2}
                alt="Second slide"
                />
            </Carousel.Item>
     
       </Carousel>
    );
};

export default Brandcurousels;