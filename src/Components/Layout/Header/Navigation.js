import classes from './Navigation.module.css';
// import {Link} from 'react-router-dom';
import { Link, useNavigate } from "react-router-dom";


const Navigation=()=>{

    return(
        <div className={classes.navlist}>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/burgers'>Burgers</Link></li>
                <li><a href="#">Pizza</a></li>
                <li><a href="#">Desi Food</a></li>
                <li><a href="#">Side Orders</a></li>
                <li><a href="#">Drinks</a></li>
            </ul>


        </div>
    );
}

export default Navigation;