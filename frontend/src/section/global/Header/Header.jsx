import { Navbar, Nav, Container } from 'react-bootstrap';
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Image from "./logo.gif"
import classes from './Header.module.css';
import { useScroll } from '../../useScroll';
import React from 'react';

function HeaderComponent() {
  const { y, x, scrollDirection } = useScroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.3s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.3s",
      transform: "translateY(-200%)"
    }
  }

  return (
    
    <Navbar expand="lg" className={`${classes.mainnav}`} style={scrollDirection === "down" ? styles.active: styles.hidden}  >
      <Container className={classes.container}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={classes.menu}>
          <span className={classes.bar1}></span>
          <span className={classes.bar2}></span>
          <span className={classes.bar3}></span>
          </Navbar.Toggle>
        <Link to="/">
          <Navbar.Brand>
            <img
              src={Image}
              alt="Logo"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`me-auto ${classes.anchor}`}>
            <Link to="/players">Players</Link>
            <Link to="/paltan-world">Paltan World</Link>
            <Nav.Link target="_blank" href='https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457'>Tickets</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
