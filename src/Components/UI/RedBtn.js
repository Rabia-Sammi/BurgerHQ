import classes from './RedBtn.module.css';

const RedBtn=(props)=>{

    return(

<button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
    );
}

export default RedBtn;