import { Container } from "react-bootstrap"
import classes from "./Footer.module.css"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Image  from "../../../assets/images/dl_logo.png";

const Footer =()=>{

    return(
        <>
        <div className={classes.footer}>
        <div className={classes.mpara}>
        <p>Copyright © 2025 Puneri Paltan</p>
        </div>

        <div className={classes.icon}>
				<div className={classes.circle}><a href="https://www.facebook.com/puneripaltan/" target="_blank"><FaFacebookF /></a></div>
				<div className={classes.circle}><a href="https://twitter.com/PuneriPaltan?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank">< FaTwitter/></a></div>
				<div className={classes.circle}><a href="https://instagram.com/puneripaltanofficial?utm_source=ig_profile_share&amp;igshid=m2wsuxrbs1f8" target="_blank"><FaInstagram /></a></div>
				<div className={classes.circle}><a href="https://www.youtube.com/c/PuneriPaltan" target="_blank"><FaYoutube /></a></div>
			</div>

            <div className={classes.footlogo}>
                <div className={classes.sign}>
                <p className={classes.p1}>Managed</p>
                <p className={classes.p2}>By</p>
                </div>
                <img src={Image} className="img-responsive" ></img>
            </div>
        </div>
        </>
    )
}
export default Footer;