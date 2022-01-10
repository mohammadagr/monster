import {Container, Nav, Navbar} from "react-bootstrap";
import {Outlet,NavLink} from "react-router-dom";
import React, {useState} from "react";
import '../navBar/navBar.css'


function NavBar() {

    return (
        <div>
            <Navbar style={{backgroundColor:'#1a374d'}} className='mb-4' collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <ul className="me-auto">
                            <li><NavLink to='home' activeclassname='active' className='unselect'>Home</NavLink></li>
                            <li> <NavLink to='monsters' activeclassname='active' className='unselect'>Robots</NavLink></li>
                            <li> <NavLink to='contactUs' activeclassname='active' className='unselect'>Contact us</NavLink></li>
                            <li> <NavLink to='aboutUs' activeclassname='active' className='unselect'>About us</NavLink></li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Outlet/>
        </div>
    )
}

export default NavBar



