import classes from './Card.css';





const Card = (props) => {

    return (
        <div className="card">
            <img src={props.img} alt=""/>
            <div className="cardBody">
                <h2>{props.name}</h2>
                <p>{props.des}</p>
            </div>
            <div className={classes.cardFooter}>
                <h2>RS 250</h2>
                {/* <RedBtn>Add to Bucket</RedBtn>                             */}
            </div>
        </div>
    );


}

export default Card;