import React, {Component} from 'react'
import { NavLink } from "react-router-dom"
import { Nav, Navbar } from 'react-bootstrap';

class Menu extends Component {

    render() {
        return (
            <Navbar className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className="container">
                    <NavLink className="navbar-brand" exact to="/"><b>Trip</b><b style={{color: '#f85959'}}>Mu</b></NavLink>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/" className="nav-link">Home</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/trip" className="nav-link">Find a Trip</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/hotels" className="nav-link">Hotels</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/flights" className="nav-link">Flights</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/rentals" className="nav-link">Rentals</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/about" className="nav-link">About</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/blog" className="nav-link">Blog</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                            </Nav.Item>
                            <Nav.Item className="nav-item">
                                <NavLink exact to="/login" className="nav-link"><span>Login</span></NavLink>
                            </Nav.Item>
                        </Nav>
                    </div>
                </div>
            </Navbar>
        );
    }

}

export default Menu;
