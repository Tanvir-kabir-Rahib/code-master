import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import Image from 'react-bootstrap/Image';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="secondary">
            <Container>
                <Navbar.Brand href="#home" className='fs-3 fw-semibold'>Code Master</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <span className='fw-semibold ms-4'><NavLink>Courses</NavLink></span>
                        <span className='fw-semibold ms-4'><NavLink>FAQ</NavLink></span>
                        <span className='fw-semibold ms-4'><NavLink>Blog</NavLink></span>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;