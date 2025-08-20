


import { Col, Row } from "react-bootstrap";
import classes from "./PaltanWorld.module.css"
import { Link } from "react-router-dom";
const PaltanWorld=()=>{
    return(
        <>
        {/* <h1>Platan world</h1> */}
        <Row md={12} className={`${classes.main} g-0`}></Row>
        <Row className={`${classes.inner} g-0`}>
          <Col md={12} lg={6} className={classes.prt1}>
          <Link to="/puneri-tv"><div>
            <h3>Puneri Tv</h3>
            </div>
            </Link>
            </Col>
           
            <Col md={12} lg={6} className={classes.prt2}>
            <Link to="/gallery">
            <div>
            <h3>Gallery</h3>
            </div>
            </Link>
            </Col>
        </Row>
       
        </>
    )
}
export default PaltanWorld;