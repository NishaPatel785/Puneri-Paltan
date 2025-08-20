import '@fortawesome/fontawesome-free/css/all.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useState, useEffect } from 'react';
import axios from 'axios';
import classes from "./OtherPlayer.module.css";
import { Col, Row } from "react-bootstrap"; 
import Image from "./Puneri Paltan-67133a78a8a714.98404916$)6bgpwn.png"
import { Link, useNavigate } from 'react-router-dom';
import { FaCaretRight } from "react-icons/fa";
import { FaCaretLeft } from "react-icons/fa";
import AOS, { refresh } from "aos"
import 'aos/dist/aos.css';
import { useLocation } from 'react-router-dom';


const OtherPlayer = () => {
    const [refresh,setRefresh]=useState(0);

    useEffect(() => {
                   AOS.init({
                     duration: 500,        
                //  offset: 100,      
                   });
                 }, []);
    // const location = useLocation();
    const [players, setPlayers] = useState([]);
    const [filepath, setFilepath] = useState();

    useEffect(() => {
        axios.get("http://localhost:6001/api/v1/get-players")
            .then((response) => {
                console.log(response.data.data);
                setPlayers(response.data.data);
                setFilepath(response.data.filepath); // Assuming this contains the URL path for images
            })
            .catch((err) => {
                console.error(err);
            });
    }, [refresh]);

    function NextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", color:'white',fontSize:"14px"}}
            onClick={onClick}
          ><FaCaretRight className={classes.faright} /></div>
        );
      }
      function PrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", color:'white',fontSize:'100px' }}
            onClick={onClick}
          ><FaCaretLeft className={classes.faleft} /></div>
        );
      }
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:<NextArrow />,
        prevArrow:<PrevArrow />,
        arrows: true,
        responsive: [
            {
                breakpoint: 767, // Mobile screen
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                   
                },
            },
            {
                breakpoint: 990, // Tablet screen
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                        autoplay: true,
                   
                },
            },
            {
                breakpoint: 1270, // Desktop screen
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                },
            },
        ],
    };

    const navigate=useNavigate()

    return (
        <>
            <Row className={`${classes.call} g-0`}>
                <Row className={`${classes.owl} g-0`}>
                    <Col data-aos="zoom-in"><h2>Other Players</h2></Col>
                </Row>
            </Row>
            
   <Row className={`${classes.second_slide} g-0`}>
        <Slider  {...settings}>
            {
            players.map((player, ind) => (
            
             <Link to={`/player/${player._id}`} >
                <Row className="g-0" >
                <Col> <div className={classes.player_num}>{player.jersey_no}</div></Col>
            </Row>
                <Row className={`${classes.colly} g-0`} 
                    onClick={() => {{
                    window.scrollTo(0,0)
                    setRefresh(r=>r+1)
                }}} >
                    <Col className={`${classes.colly1} g-0`} >
                     <h3 className={classes.first}>{player.f_name}</h3>
                     <h3 className={classes.last}>{player.l_name}</h3>
                     <p className={classes.p1}>{player.category.name}</p>
                     </Col>
                <Col key={ind} className={classes.colly2} >
                 <img
                     src={`${filepath}${player.profile_image}`} 
                     style={{ height: '250px', objectFit: 'cover' }}
                     className={classes.Igo}
                 />
                                
                </Col>
                </Row>
                </Link>
                      
                ))
                 }
                </Slider>
            </Row>
        </>
    );
};

export default OtherPlayer;
