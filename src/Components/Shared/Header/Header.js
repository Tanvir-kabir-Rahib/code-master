import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { FaArrowRight, FaUserAlt, FaSun, FaMoon } from "react-icons/fa";
import Image from 'react-bootstrap/Image';
import logo from '../../../media/picture/logo.png';
import { AuthContext } from '../../contexts/AuthProvider';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut().then(() => { })
            .catch(error => console.error(error))
    }
    const [theme, setTheme] = useState(true)
    const handleTheme = () => {
        setTheme(!theme)
    }
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
                    {
                        user ?
                            <div className='d-flex'>
                                {
                                    user?.photoURL ?
                                        <Tippy content={user?.displayName}><Image src={user?.photoURL} style={{ height: "45px", width: "45px" }} roundedCircle></Image></Tippy>
                                        :
                                        <FaUserAlt title={user?.displayName}></FaUserAlt>
                                }

                                <Button onClick={handleLogOut} className="d-flex align-items-center justify-content-evenly ms-3 text-white fw-semibold me-2" variant='info'>
                                    <span className='me-2'>Log Out</span> <FaArrowRight></FaArrowRight>
                                </Button>
                            </div>
                            :
                            <Nav>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info"
                                } to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "mx-3 text-decoration-none text-success fw-semibold text-decoration-underline" : "mx-3 fw-semibold text-decoration-none text-info me-2"
                                } to="/register">Register</NavLink>
                            </Nav>
                    }
                    <Button onClick={handleTheme} variant={theme ? "light" : "dark"} className="my-3">
                        Theme {theme ? <FaSun className='text-warning fs-5'></FaSun> : <FaMoon className='text-warning fw-5'></FaMoon>}
                    </Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;