import classes from './Card.css';
import RedBtn from "../../UI/RedBtn";





const Card = (props) => {

    return (
        <div className="card">
            <img src={props.img} alt=""/>
            <div className="cardBody">
                <h2>{props.name}</h2>
                <p>{props.des}</p>
            </div>
            <div className="cardFooter">
                <h2>Rs {props.price}</h2>
                <RedBtn>Add to Bucket</RedBtn>                            
            </div>
        </div>
    );


}

export default Card;