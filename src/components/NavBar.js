import { useEffect, useState } from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export const NavBar = () =>{
    const {activeLink, setActiveLink } = useState('home');
    const { scolled, seScrolled } = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 50) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }
    }, []);

      return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">
            <img src={''} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
               <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Skills</Nav.Link>
                <Nav.Link href="#link">Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#"> <img src={''} alt=""></img></a>
                  <a href="#"> <img src={''} alt=""></img></a>
                  <a href="#"> <img src={''} alt=""></img></a>
                  <a href="#"> <img src={''} alt=""></img></a>
                </div>
                <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }