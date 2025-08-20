// import HeaderComponent from "../global/Header/Header"
import IntroductionComponent from "./Introduction/Introduction"
import Partners from "./Partners/Partners"
import Section1 from "./section1/section1"
import Section2 from "./section2/section2"
import Ticket from "./TicketParent/Ticket"
import SimpleSlider from "./Slider/Slider"
import SliderMain from "./Slider/SliderMain"
import Slider from "react-slick"
import Slideshow from "./Slider/Slider"
import MainSection2 from "./section2/MainSection2"
import Fixture from "./Fixture/Fixture"
import News from "./News/News"
import Footer from "../global/Footer/Footer"
import GoTopButton from "../../components/GoToTopButton/GoTopButton"



const HomePage=()=>{
    return(
        <>
        <IntroductionComponent/>
      
         <Section1/>
        <MainSection2/>
            <Fixture/>
            <News/> 
            <Partners/> 
           
        </>
    )
}
export default HomePage;