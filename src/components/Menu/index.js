import React, {Component} from 'react'
import { NavLink, Link } from "react-router-dom"

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" exact to="/"><b>Trip</b><b style={{color: '#f85959'}}>Mu</b></Link>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink exact to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/trip" className="nav-link">Find a Trip</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/hotels" className="nav-link">Hotels</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/flights" className="nav-link">Flights</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/rentals" className="nav-link">Rentals</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/about" className="nav-link">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/blog" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact to="/login" className="nav-link"><span>Login</span></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;
