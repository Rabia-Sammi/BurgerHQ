
import classes from './Header.css';
import '../../../App.css';
import React from 'react';
import Logo from './logo.jpg';
import Navigation from './Navigation.js'
import RedBtn from '../../UI/RedBtn';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBitbucket} from '@fortawesome/free-brands-svg-icons';
// npm i --save @fortawesome/free-brands-svg-icons \



const Header = (props) => {
    return (
        <div className="header">
            <div className='container'>
                <div className= "Hcontainer">
                <img className="logo" src={Logo} alt="" ></img>
                <Navigation/>
                
                <div className="button">
                <button className="cartBtn" onClick={props.showCart}> <FontAwesomeIcon icon={faBitbucket} /> </button>
                <RedBtn>Register/Sign In</RedBtn>
                </div>
            </div>
       </div>
        </div>
    );
}

export default Header;

