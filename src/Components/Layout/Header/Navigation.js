import classes from './Navigation.module.css';

const Navigation=()=>{

    return(
        <div className={classes.navlist}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Pizza</a></li>
                <li><a href="#">Desi Food</a></li>
                <li><a href="#">Side Orders</a></li>
                <li><a href="#">Drinks</a></li>
            </ul>


        </div>
    );
}

export default Navigation;