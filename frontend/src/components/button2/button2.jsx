

import classes from "./button2.module.css"
const Button2=({name})=>{
    return(
        <>
        
         <button className={classes.btn}>{name}</button>
         
        </>
    )
}

export default Button2;