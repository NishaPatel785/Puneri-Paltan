import { Row, Col } from "react-bootstrap";
import classes from "./Banner.module.css"
import Image1 from "../../../assets/images/banner-title.png"
import Image2 from "../../../assets/images/players_page_banner_desktop_S11.png"
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Banner = () => {
        useEffect(() => {
                AOS.init({
                duration: 1500,        
            offset: 100,      
                });
            }, []);
    return (
        <>
            <div className={classes.container}>
                <Row  className={` ${classes.ril} g-0`}>
                    <Col md={{ span: 4, offset: 2 }} sm={12} className={`p-0 ${classes.col}`}>
                        <div className={classes.title}>
                            <div className={classes.inner_title}>
                                <img data-aos="fade-up" src={Image1} className={classes.back} />
                                <h1  data-aos="fade-down" >players</h1>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}   className={classes.col2}>
                        <div className={classes.title}>
                            <div style={{verticalAlign:'bottom'}} className={classes.inner_title}>
                                <img  data-aos="fade-up" src={Image2} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Banner;