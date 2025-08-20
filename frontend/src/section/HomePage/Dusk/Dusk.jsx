import classes from "./Dusk.module.css"
import Image from "../../../assets/images/fixtures-bg.jpg"
const Dusk=()=>{
    return(
        <>
        <div className={classes.main}>
        <img src={Image} alt="dusk" />
        </div>
        </>
    )
}

export default Dusk;