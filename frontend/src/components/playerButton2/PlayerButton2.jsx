
import classes from "./PlayerButton.module.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PlayerButton2=({heading})=>{
    useEffect(() => {
               AOS.init({
                 duration: 500,        
             offset: 200,      
               });
             }, []);
    return(
        <>
        <div data-aos="fade-right">
         <h3  className={classes.title_band}>{heading}</h3>
         </div>

        </>
    )
}
export default PlayerButton2;