import Dusk from "../Dusk/Dusk"
import Slideshow from "../Slider/Slider"
import SliderMain from "../Slider/SliderMain"
import Ticket from "../TicketParent/Ticket"
import Section2 from "./section2"


import classes from "./section2.module.css"
const MainSection2=()=>{
    return(
        <>
        <div className={classes.main}>
            <Section2/>
            <SliderMain/>
            <Dusk/>
            <Ticket/>
        </div>
        </>
    )
}

export default MainSection2;