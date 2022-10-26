import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight, FaUserAlt } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import logo from '../../../media/picture/logo.png';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="secondary" className='mb-5'>
            <Container>
                <Image
                    alt=""
                    src={logo}
                    width="75"
                    height="75"
                    className="d-inline-block align-top"
                />
                <Navbar.Brand className='fs-3 fw-semibold'><Link to="/" className='text-decoration-none text-info'>Code Master</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className={({ isActive }) =>
                            isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                        } to="/courses">Courses</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                        } to="/faq">FAQ</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                        } to="/blog">Blog</NavLink>
                    </Nav>
                    <Nav>
                        <NavLink className={({ isActive }) =>
                            isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                        } to="/login">Login</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                        } to="/register">Register</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;