import React from 'react'
import './Header.css'
import sliderOne from '../../images/one.jpg'
import sliderTwo from '../../images/two.jpg'
import sliderThree from '../../images/three.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Header = () => {
    
    return (
        <>
            <Carousel autoPlay="true" infiniteLoop="true" className="">
                <div>
                    <img src={sliderOne } />
                </div>
                <div>
                    <img src={sliderTwo } />
                </div>
                <div>
                    <img src={sliderThree} />
                </div>
                
            </Carousel>
        </>
    )
}

export default Header
