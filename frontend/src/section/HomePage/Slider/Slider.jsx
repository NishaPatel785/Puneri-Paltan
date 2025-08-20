import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import { Link } from "react-router-dom";


import classes from "./Slider.module.css"
import Button2 from "../../../components/button2/button2";

const Slideshow = () => {

  const [players, setPlayers] = useState([]);
  const [filepath, setFilepath] = useState();

  useEffect(() => {
    axios.get("http://localhost:6001/api/v1/get-players")
        .then((response) => {
          console.log(response.data.data);
          setPlayers(response.data.data);
          setFilepath(response.data.filepath);
        })
        .catch((err) => {
          console.error(err);
        })
  }, [])
  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:'black',fontSize:"60px"}}
        onClick={onClick}
      ><FaCaretRight className={classes.faright} /></div>
    );
  }
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color:'black',fontSize:'100px' }}
        onClick={onClick}
      ><FaCaretLeft className={classes.faleft} /></div>
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:<NextArrow />,
    prevArrow:<PrevArrow />,
    arrows: true, 
    responsive: [
      {
        breakpoint: 767, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
         
     
           
        },
      },
      {
        breakpoint: 990,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        
        },
      },
      {
        breakpoint: 1270,  
        settings: {
          slidesToShow: 2,  
          slidesToScroll: 1,
        
        },
      },
    ],
  };

  return (
    <div className={`${classes.slide} g-0`}>
      <Slider {...settings}>
        {
          players.map((player, ind) => (
            <div key={ind} className={classes.main}>
              <img
                src={`${filepath}${player.profile_image}`}
                style={{  height: '300px', objectFit: 'cover' }}
                className={`${classes.sliderImg}`} // Add center class to active slide
              />
              <div className={`text-center ${classes.name}`}>
              <h3 className={classes.head1}>{player.f_name}</h3>
              <h3 className={classes.head2}>{player.l_name}</h3>
              <p className={classes.para}>{player.category.name}</p>
              </div>
            </div>
          ))
        }
      </Slider>
     <Link to="/players"><div className={classes.ram}><Button2 name="Enter" /></div></Link>
    </div>
  );
};

export default Slideshow;
