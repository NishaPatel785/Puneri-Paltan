import Slideshow from "./Slider";
import classes from "./Slider.module.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Button2 from "../../../components/button2/button2";
  const SliderMain=()=>{

      useEffect(() => {
        AOS.init({
          duration: 1500,        
      offset: 100,      
        });
      }, []);
    return(
        <>
        <div  className={classes.sliderWrapper}>
            <h2 data-aos="fade-down" className={classes.player}  >PLAYERS</h2>
            <Slideshow/>
        </div>
        </>
    )
  }

  export default SliderMain;