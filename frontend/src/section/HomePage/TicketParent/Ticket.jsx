import { Row,Col,Container } from "react-bootstrap"
import classes from "./Ticket.module.css"
import ticketboyImage from "../../../assets/images/buy-tickets-homepage_s11.png"
import mainTicket from "../../../assets/images/tickets.png"
const Ticket=()=>{
    return(
        <>
        <Container>
        <div className={classes.parent}>
           <Row className={`${classes.parent1} g-0`}>
            <Col className={classes.column1}>
            <a href="https://www.thesouledstore.com/artists/official-merchandise-puneri-paltan" target="_blank">
                               
            <img src={ticketboyImage}  alt="TicketBoy" />
                            </a>
            </Col>
            <Col className={classes.column2}>
            <a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank">
            <img src={mainTicket}  alt="Ticket" />
                                </a>
        <button className={classes.btn}><span ><a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457" target="_blank">Buy Tickets</a></span></button>
            </Col>
           </Row>
           </div>
           </Container>
                       
        </>
    )
}

export default Ticket
