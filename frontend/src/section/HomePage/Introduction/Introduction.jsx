import Container from "react-bootstrap/esm/Container";
import HeaderComponent from "../../global/Header/Header"
import classes from "./Introduction.module.css"


const IntroductionComponent=()=>{

    return(
        <>
       <div className={classes.gill} >
        {/* <HeaderComponent/> */}
        <div className={classes.main}></div>
        <div className={classes.main2}></div>
        </div>

        
        </>
    )
}
export default IntroductionComponent;