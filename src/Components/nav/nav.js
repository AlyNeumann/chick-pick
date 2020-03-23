import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cpm_logo1 from '../../images/cpm_logo1.png';
import './nav.css'

const Navigation = (props) => {
    return (
        <React.Fragment>
            <Navbar className="justify-content-start nav-container">
                <Navbar.Brand href="/"><img src={cpm_logo1} className="logo" /></Navbar.Brand>
                <Nav.Item>
                    <Link className="nav-text" to="/">
                        home
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-text" to="/about">
                        about
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-text" to="/video">
                        videos
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-text" to="/calendar">
                        calendar
                    </Link>
                </Nav.Item>
            </Navbar>
            {props.children}
        </React.Fragment>
    )
}

export default Navigation;
