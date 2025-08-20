
import classes from "./PlayerButton1.module.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
const PlayerButton1=({name})=>{
    useEffect(() => {
        AOS.init({
        duration: 1500,        
        offset: 100,      
        });
      }, []);
    return(
        <>
        <div>
            <button data-aos="fade-right" className={classes.btn}>{name}</button>
        </div>

        </>
    )
}

export default PlayerButton1;