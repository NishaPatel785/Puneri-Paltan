
import { Link, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import classes from "./Match.module.css"
import axios from "axios";
import { Row,Col, Container } from "react-bootstrap";
import Image1 from "../../../assets/images/banner-title.png"
import Image2 from "../puneri-gallery-desk-banner-s11.png"
import GoTopButton from "../../../components/GoToTopButton/GoTopButton";
import { useNavigate } from "react-router-dom";

const Match=()=>{
    
    const { id } = useParams();
    let nextId=1+Number(id);
    if(nextId==9){
        nextId=1;
    }
    let PrevId=Number(id)-1;
    if(PrevId==0){
        PrevId=8;
    }
    const [playerData, setplayerData] = useState([]);
    const [lastData,setlastData]=useState([]);
    const [nextData,setnextData]=useState([]);
    const [refresh,setRefresh]=useState(0)

    useEffect(() => {
        axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_gallary?id=${id}`)
            .then(response => {
                setplayerData(response.data);
               
            })
            .catch(error => {
                console.log(error)
            });
    }, [id,refresh]);
    console.log(playerData)
    useEffect(() => {
        axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_gallary?id=${nextId}`)
            .then(response => {
                setnextData(response.data);
               
            })
            .catch(error => {
                console.log(error)
            });
    }, [nextId,refresh]);
    useEffect(() => {
        axios.get(`https://appy.trycatchtech.com/v3/puneri_paltan/single_gallary?id=${PrevId}`)
            .then(response => {
                setlastData(response.data);
               
            })
            .catch(error => {
                console.log(error)
            });
    }, [PrevId,refresh]);
     const navigate=useNavigate()

   
    return(
        <>
         <Row className={`${classes.container} g-0`}>
          <Col xs={6}  className={classes.inner_sec}>
          <img src={Image1} alt="banner" />
          <h1>Gallery</h1>
          </Col>
          <Col xs={6} className={classes.outer_sec}>
          <img src={Image2} alt="gallery desk" />
          </Col>
        </Row>

        <Container className="pr-0">
            <Row className="g-0">
                <div className={classes.fluid}>
                    <h3>{playerData.name}</h3>
                </div>
            </Row>
            <Row className={`g-0`} >
                <Col  className={classes.image}>
                {playerData?.match_images?.map((d,i)=>
                <li className={`${classes.li}`}>
                <img src={d} />
                
                </li>
                )}
                
                </Col>
            </Row>  
        </Container>
        <Row className={`g-0 mt-5 ${classes.grow}`}>
            <Col className={classes.last} md={6} >
        
            <div onClick={()=>{
                navigate(`/gallery/${PrevId}`);
                setRefresh(r=>r+1);
                window.scrollTo(0,0)
            }} className={classes.minst} style={{backgroundImage: `url(${lastData.main_image})`}} >
            <h4>{lastData.name}</h4>
            </div>
            {/* </Link> */}
            </Col>
            <Col className={classes.nst} md={6} >
            <div onClick={()=>{
                navigate(`/gallery/${nextId}`);
                setRefresh(r=>r+1) ;
                window.scrollTo(0,0)
                
            }}style={{backgroundImage:`url(${nextData.main_image})`}} className={classes.tim} >
            <h4>{nextData.name}</h4>
            </div>
            </Col>
        </Row>
        <GoTopButton/>
        
        </>
    )
}

export default Match;