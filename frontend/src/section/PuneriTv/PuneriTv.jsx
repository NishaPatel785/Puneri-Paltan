import classes from "./PuneriTv.module.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Image1 from "./puneri-tv-desk-banner-s11.png";
import Image2 from "../../assets/images/banner-title.png";
import GoTopButton from "../../components/GoToTopButton/GoTopButton";
import Modal from 'react-bootstrap/Modal';
import mainImage from "./0.jpg";
import videologo from "./play.png"

const PuneriTv = () => {
  const [show, setShow] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null); // Track the selected video

  const [videos, setVideos] = useState([]);
  const [catId, setCatId] = useState(7);

  useEffect(() => {
    axios
      .get(`https://appy.trycatchtech.com/v3/puneri_paltan/puneri_tv_list?cat_id=${catId}`)
      .then((response) => {
        setVideos(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [catId]);

  const handleClose = () => setShow(false); 
  const handleShow = (video) => {
    setSelectedVideo(video); 
    setShow(true); 
  };

  const handleSeasonChange = (event) => {
    setCatId(event.target.value);
  };


  const [activesession,setActive]=useState(7)
  return (
    <>
      <Row className={`${classes.container} g-0`}>
        <Col className={classes.inner_sec}>
          <img src={Image2} alt="banner" />
          <h1>
            Puneri
            <br />
            Tv
          </h1>
        </Col>
        <Col className={classes.outer_sec}>
          <img src={Image1} alt="puneri tv desk" />
        </Col>
      </Row>

      <Container>
        <Row className={` ${classes.galrow} mt-4 g-0`}>
          <Col className={` ${classes.but} text-end me-3`}>
            <button className={`${activesession === 6 ? classes.active : ''}`} onClick={() =>{ setCatId(6); setActive(6)}}  active={catId === 6} >Season 10</button>
          </Col>
          <Col className={` ${classes.but}`}>
            <button className={`${activesession === 7 ? classes.active : ''}`} onClick={() =>{ setCatId(7); setActive(7)}} active={catId === 7}>Season 11</button>
          </Col>
        </Row>

        <Row>
          <Col className={classes.hidden}>
            <select onChange={handleSeasonChange} value={catId}>
              <option value={6}>Season 10</option>
              <option value={7}>Season 11</option>
            </select>
          </Col>
        </Row>
      </Container>

      <GoTopButton />

      <Container className={classes.video}>
        <Row className="g-0">
          {videos.map((video) => (
            <Col lg={6} md={6} key={video.id} className="g-4">
              <img
                src={mainImage}
                alt={video.name}
                className={classes.videoThumbnail}
                onClick={() => handleShow(video)} 
              />
              <div className={classes.box}>{video.name}</div>
              <img src={videologo} onClick={() => handleShow(video)} className={classes.vidlogo}/>
            </Col>
          ))}
        </Row>
      </Container>

      {selectedVideo && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src={`https://www.youtube.com/embed/${selectedVideo.url}`}
              title={selectedVideo.name}
              width="100%"
              height="315"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default PuneriTv;
