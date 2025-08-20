import classes from "./Gallery.module.css"
import { Row,Col,Container,Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import Image1 from "../../assets/images/banner-title.png"
import Image2 from "./puneri-gallery-desk-banner-s11.png"
import Box from "../../components/Box/Box";
import { Link } from "react-router-dom";
import GoTopButton from "../../components/GoToTopButton/GoTopButton";

const Gallery=()=>{

  const [images, setImages] = useState([]);
    const [catId, setCatId] = useState(7);

  useEffect(() => {
    axios
      .get(`https://appy.trycatchtech.com/v3/puneri_paltan/gallary_list?cat_id=${catId}`)
      .then((response) => {
        setImages(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, [catId]); 
    return(
        <>
        <Row className={`${classes.con} g-0`}>
          <Col xs={6}  className={classes.inner_sec}>
          <img src={Image1} alt="banner" />
          <h1>Gallery</h1>
          </Col>
          <Col xs={6} className={classes.outer_sec}>
          <img src={Image2} alt="gallery desk" />
          </Col>
        </Row>
        <Container>
      <Row className={`${classes.mainhii} mt-4 g-0`} >
        <>
          
            <Col className={` ${classes.but}`}>
              <button
                onClick={() => setCatId(7)} 
                active={catId === 7} 
              >
                Season 11
              </button>
            </Col></>
      </Row>
      
        <Row className="g-0">
          {images.map((image,i) => (
            <Col className="g-4" lg={6} md={12} key={image.id} >
              <Link to={`/gallery/${image.id}`}>
              <img src={image.main_image} alt={`${image.name}`} className={classes.partimage} />
              <div className={classes.box}><Box title={image.name} /></div>
              </Link>
              
            </Col>
          ))}
        </Row>
      </Container>
      <GoTopButton/>
       </>
    )
}
export default Gallery;