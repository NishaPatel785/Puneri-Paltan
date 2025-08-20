

import classes from "./Box.module.css"
const Box=({title})=>{
    return(
        <>
        <div className={classes.inner_btn}>{title}</div>
        </>
    )
}
export default Box;