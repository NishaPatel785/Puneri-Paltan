import { Row, Col } from "react-bootstrap";
import classes from "./Partners.module.css";
import forceMotorsImage from "../../../assets/images/force_motors.png";
import corLoskarImage from "../../../assets/images/korloskar-brother-logo.png";
import IconImage from "../../../assets/images/icon-logo.png";
import radioImage from "../../../assets/images/radio.png";
import shivImage from "../../../assets/images/shiv-naresh-logo.png";
import stihlImage from "../../../assets/images/stihl-logo.png";
import vikramImage from "../../../assets/images/vikram-tea.png";
import hintImage from "../../../assets/images/hint_logo.png";
import focusImage from "../../../assets/images/F1-Focus11_logo.png";
import BateryImage from "../../../assets/images/Batery-Ai_logo.png";
import dlImage from "../../../assets/images/dl_logo.png";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Partners = () => {
   useEffect(() => {
          AOS.init({
              duration: 1500,
              offset: 0,
          });
      }, []);
  return (
    <>
    <div className={classes.container}>
      <div className={classes.head}>
        <h2 data-aos="zoom-in" data-aos-duration="1500"
                            data-aos-easing="ease-out">PARTNERS</h2>
      </div>

      <div>
        <Row className="justify-content-center g-0" style={{width:"100%"}}>
        <Col className="d-flex justify-content-center ">
        <a href="https://www.forcemotors.com/" target="_blank">              
            <img src={forceMotorsImage} alt="Force Motors" />
            <h6>Principal Partner</h6>
        </a>
          </Col>
        </Row>
      </div>

      <Row className={`justify-content-center g-0 ${classes.row1}`}>
        <Col className="d-flex justify-content-center">
        <a href="https://batery.ai/" target="_blank"> 
          <img src={BateryImage} alt="Battery AI" />
          <h6>Powered By</h6>
          </a>
       
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="https://www.kirloskarpumps.com/" target="_blank"> 
          <img src={corLoskarImage} alt="Korloskar" />
          <h6> Associate Partner</h6>
          </a>
        </Col>
      </Row>

      <Row className={`justify-content-center g-0 ${classes.row2}`}>
        <Col className="d-flex justify-content-center">
        <a href="https://www.stihl.com/en" target="_blank"> 
          <img src={stihlImage} alt="Stihl" />
          <h6>Co-Partner</h6>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="https://www.hintworld.com/" target="_blank"> 
          <img src={hintImage} alt="Hint" />
          <h6>Co-Partner</h6>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="https://www.vikramtea.com/" target="_blank"> 
          <img src={vikramImage} alt="Vikram Tea" />
          <h6>Co-Partner</h6>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="https://www.focus11.net/" target="_blank"> 
          <img src={focusImage} alt="F1 Focus" />
          <h6>Co-Partner</h6>
          </a>
        </Col>
      </Row>

      <Row className={`justify-content-center g-0 ${classes.row3}`}>
        <Col className="d-flex justify-content-center">
        <a href="https://www.radiocity.in/" target="_blank"> 
          <img src={radioImage} alt="Radio" />
          <h6>Radio-Partner</h6>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="http://www.mytripicon.com/" target="_blank"> 
          <img src={IconImage} alt="Icon Logo" />
          <h6>Travel-Partner</h6>
          </a>
        </Col>
        <Col className="d-flex justify-content-center">
        <a href="https://shivnaresh.in/" target="_blank"> 
          <img src={shivImage} alt="Shiv Naresh" />
          <h6>Kit-Partner</h6>
          </a>
        </Col>
      </Row>
      </div>
    </>
  );
};

export default Partners;
