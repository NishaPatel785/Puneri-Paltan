import Tilt from "react-parallax-tilt"

import { Col, Container, Row } from "react-bootstrap";
import classes from "./Raiders.module.css"
import { Link } from "react-router-dom";
import AOS from "aos"
import 'aos/dist/aos.css';
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";


const AllRounders = ({ players, filepath, category }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: 100,
    });
  }, []);
  return (
    <div style={{ backgroundColor: "#EDEEF2", width: "100%", paddingTop: "20px" }} className={classes.raider}>
      <div data-aos="fade-right" className={classes.parent}>
        <h3 className={classes.title_band}>{category.name}</h3>
      </div>
      <Row className={`g-5 ${classes.images}`}>
        {players.map((player, i) => (
          <Col xs={12} sm={6} md={4} lg={4} className={classes.col}>
            <Fade duration={1500} delay={i * 300} cascade={true}> <Tilt>
              <Link to={`/player/${player._id}`}><img key={i} src={`${filepath}${player.profile_image}`} alt={player.f_name} /></Link>
            </Tilt></Fade>
            <Fade duration={1500} delay={i * 300} cascade={true}>
              <div className={classes.name}>
                <h3 className={classes.team_fname}>{player.f_name}</h3>
                <h3 className={classes.team_lname}>{player.l_name}</h3>
                <h5 className={classes.team_position}>{category.name}</h5>
              </div>
            </Fade>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllRounders;
