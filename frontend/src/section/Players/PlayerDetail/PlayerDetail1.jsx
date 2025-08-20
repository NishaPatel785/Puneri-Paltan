import { Col, Row } from "react-bootstrap";
import PlayerButton1 from "../../../components/playerButton/PlayerButton1";
import classes from "./PlayerDetail.module.css";  
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";

const PlayerDetail1 = ({ mobImg,bgImg,fullImg, jersey, position, name, DOB, nation }) => {
    useEffect(() => {
               AOS.init({
                 duration: 500,        
            //  offset: 100,      
               });
             }, []);
  return (
    <> 
    <Row className={`${classes.bg} g-0`}><img className={classes.image1} src={bgImg}></img>
    <img className={classes.image2} src={mobImg}></img></Row>
      <Row className={`${classes.container} g-0`} xs={12} sm={12} >
       
        <Col data-aos="fade-right" className={classes.col1}>
          <img src={fullImg} alt={name} className={classes.playerImage} />
        </Col>

        <Col>
         
          <Row  className="g-0">
            <Col className={classes.jers}>
              <PlayerButton1 name="Jersey No" />
              <p>{jersey}</p>
            </Col>
            <Col className={classes.jers}>
              <PlayerButton1 name="Position" />
              <p>{position}</p>
            </Col>
          </Row>

          <Row className={`${classes.player_full} g-0`}></Row>

          
         <Row  className={`${classes.pad} g-0`}>
            <Col className={classes.vital}>
              <PlayerButton1 name="Vitals" />
              <table>
                <tbody>
                  <tr>
                    <td className={classes.bio_title}>Name</td>
                    <td className={classes.bio_desc}>{name}</td>
                  </tr>
                  <tr>
                    <td className={classes.bio_title}>Date of Birth</td>
                    <td className={classes.bio_desc}>{DOB}</td>
                  </tr>
                  <tr>
                    <td className={classes.bio_title}>Nationality</td>
                    <td className={classes.bio_desc}>{nation}</td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row> 
        </Col>
      </Row>
    </>
  );
};

export default PlayerDetail1;
