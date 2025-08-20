import Img1 from "../../../assets/images/puneri-world-bg_S111.jpg"
import Img2 from "../../../assets/images/puneri-world-home-mobile-banner-new-S11.png"
import Img3 from "../../../assets/images/puneri-world-left-dust.png"
import Img4 from "../../../assets/images/puneri-world-middle-dust.png"
import Img5 from "../../../assets/images/puneri-world-right-dust.png"
import { Col, Row } from "react-bootstrap";
import classes from "./Fixture.module.css"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom"
const Fixture=()=>{
    
          useEffect(() => {
            AOS.init({
              duration: 1500,        
          offset: 0,      
            });
          }, []);

    return(
        <>
       <Row className={`${classes.main} g-0`}>
        <Col>
        <img src={Img2}  alt="Img2" className={classes.img2}/>
        <img src={Img2}  alt="Img2" className={classes.imgreplace}/>
         <img src={Img3}  alt="Img3" className={classes.left}/>
         <img src={Img4} alt="Img4"  className={classes.middle}/>
         <img src={Img5}  alt="Img5" className={classes.right}/>
         <div className={classes.btnmain}>
          <h2 data-aos="fade-down"  className={classes.h1}>PALTAN</h2>
          <h2 data-aos="fade-up" className={classes.h2}>WORLD</h2>
         </div>
          <div className={classes.mian}>
          <Link to="/paltan-world"><a><button >Enter</button></a></Link>
          </div>
         </Col> 
       </Row>
        </>
    )
}

export default Fixture;