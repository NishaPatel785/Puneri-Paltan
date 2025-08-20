

import { Row, Col } from "react-bootstrap";
import classes from "./News.module.css"
import Button2 from "../../../components/button2/button2";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Link } from "react-router-dom";
const News = () => {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            offset: 0,
        });
    }, []);

    return (
        <>
            <Row className={`${classes.mainnews} g-0`}>
                <Row className={`${classes.news} g-0`}>
                    <div>
                        <h2 className={classes.h1} data-aos="fade-down">PUNERI PALTAN</h2>
                        <h2 className={classes.h2} data-aos="fade-up">in the NEWS</h2>
                    </div>
                </Row>
                <Row className= {`${classes.rowmi}`} >
                <Link to="/news"><div className={` ${classes.btn}`}><Button2 name="Enter" /></div></Link>
                </Row>
                <Row className={`${classes.subscribe} g-0`}>
                    <Row className={`${classes.sub} g-0`}>
                        <Col xs={6} data-aos="zoom-in" data-aos-duration="1500"
                            data-aos-easing="ease-out"><h3>subscribe to our newsletter</h3></Col>
                        <Col xs={3}>
                            <input type="email" placeholder="Enter your email-id" />
                        </Col>
                        <Col xs={3} className={classes.inputbut}><Button2 name='Go' /></Col>
                    </Row>
                </Row>
            </Row>

        </>
    )
}

export default News;