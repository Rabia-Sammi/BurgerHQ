
import classes from './Header.module.css';
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
        <div className={classes.header}>
            <div className='container'>
                <div className= {classes.container} >
                <img className={classes.logo} src={Logo} alt="" ></img>
                <Navigation/>
                
                <div className={classes.button}>
                <button className={classes.cartBtn} onClick={props.showCart}> <FontAwesomeIcon icon={faBitbucket} /> </button>
                <RedBtn>Register/Sign In</RedBtn>
                </div>
            </div>
       </div>
        </div>
    );
}

export default Header;

