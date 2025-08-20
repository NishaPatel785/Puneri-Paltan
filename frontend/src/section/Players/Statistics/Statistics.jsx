import { Row,Col } from "react-bootstrap";
import classes from "./Statistics.module.css"
import PlayerButton2 from "../../../components/playerButton2/PlayerButton2";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react"; 

const Statistics=({totaltakles,nooftakles,match,pointearn,mostpoint,percent,superraids,super10,avgraid})=>{
       useEffect(() => {
                     AOS.init({
                       duration: 1000,
                       easing: 'ease-in',        
                  //  offset: 100,      
                     });
                     AOS.refresh();
                   }, []);
    return(
        <>
        <Row className="g-0" style={{margin:"0px"}}>
            <Col md={12}>
            <h2 data-aos="zoom-in" className={classes.h2}>statistics</h2>
            </Col>

        </Row>
        <Row className={`${classes.overall} g-0`}>
          <Col lg={12} xl={4}><PlayerButton2 heading="overall"/></Col> 
          {/* <Col className={classes.num}></Col> */}
          <Col className={classes.num}>
          <h4 data-aos="zoom-in" className={classes.points}>{match}</h4>
          <h5 className={classes.des}>MATCHES PLAYED</h5>
          </Col>
          <Col className={classes.num}>
          <h4 data-aos="zoom-in" className={classes.points}>{pointearn}</h4>
          <h5 className={classes.des}>TOTAL POINTS EARNED</h5>
          </Col>
          <Col className={classes.num}>
          <h4 data-aos="zoom-in" className={classes.points}>{mostpoint}</h4>
          <h5 className={classes.des}>MOST POINTS IN A MATCH</h5>
          </Col>
          <Col className={classes.num}>
          <h4 data-aos="zoom-in" className={classes.points}>{percent}</h4>
          <h5 className={classes.des}>NOT OUT PERCENTAGE</h5>
          </Col>
          

        </Row>
        <Row  className={`${classes.pad} g-0`}>
            <Col lg={12} xl={4}><PlayerButton2 heading="raid"/></Col>
            <Col className={classes.num}>
            <h4 data-aos="zoom-in" className={classes.attack}>{superraids}</h4>
          <h5 className={classes.des}>No of super Raids</h5>
            </Col>
            <Col className={`${classes.num} ${classes.border}`}>
            <Row className="g-0">
            <h4 data-aos="zoom-in" className={classes.attack}>{super10}</h4>
            <h5 className={classes.des}>Super 10s</h5></Row>
            <Row className="g-0">
            <h4 data-aos="zoom-in" className={classes.attack}>{avgraid}</h4>
            <h5 className={classes.des}>Avg. Raid points</h5>
            </Row>
            </Col>
            <Col>
               <div className={classes.circlediv}>
                <div className={classes.circle}>
                    <p>totol raid<br/>
                    <span className={classes.span}>207</span></p>
                </div>
               </div>
            </Col>
            <Col>
            <div className={classes.outervalign}>
                <h6>53.14%</h6>
                <p>RAID STRIKE
                RATE</p>
            </div>
            </Col>
        </Row >
        <Row className={`${classes.overall} g-0`}>
            <Col lg={12} xl={4}><PlayerButton2 heading="tackles"/></Col>
            <Col className={classes.num}>
            <h4 data-aos="zoom-in" className={classes.points}>{nooftakles}</h4>
          <h5  className={classes.des}>No. of super tackles</h5>
            </Col>
            <Col className={`${classes.num} ${classes.border2}`}>
            <h4 data-aos="zoom-in" className={classes.points}>{totaltakles}</h4>
          <h5 className={classes.des}>Total tackle points</h5>
            </Col>
            <Col>
               <div className={classes.circlediv}>
                <div className={classes.circle2}>
                    <p>totol raid<br/>
                    <span className={classes.span}>207</span></p>
                </div>
               </div>
            </Col>
            <Col>
            <div className={classes.innervalign}>
                <h6>53.14%</h6>
                <p>RAID STRIKE
                RATE</p>
            </div>
            </Col>

        </Row>
        </>
    )
}
export default Statistics;