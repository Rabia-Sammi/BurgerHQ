import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import slider1 from '..//../Assets/images/slider1.jpg';
import slider2 from '..//../Assets/images/slider2.jpg';
// import slider3 from './images/slider3.jpg';


const Slider = ()=> {

    return(
        <div>
                    <OwlCarousel className='owl-theme' items={1} loop margin={10} autoplay={true} dots={false}>
                        <div className='item'>
                            <img src={slider1} />
                        </div>
                        <div className='item'>
                            <img src={slider2} />
                        </div>
                        <div className='item'>
                            <img src={slider1} />
                        </div>
                    </OwlCarousel>
        </div>
    );
}

export default Slider;