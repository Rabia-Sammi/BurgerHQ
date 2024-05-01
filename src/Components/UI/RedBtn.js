import classes from './RedBtn.css';

const RedBtn=(props)=>{

    return(

<button
      className="redBtn"
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
    );
}

export default RedBtn;