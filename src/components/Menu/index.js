import React, {Component} from 'react'
import { Link } from "react-router-dom"

class Menu extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/"><b>Trip</b><b style={{color: '#f85959'}}>Mu</b></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                            aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/trip" className="nav-link">Find a Trip</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/hotels" className="nav-link">Hotels</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/flights" className="nav-link">Flights</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/rentals" className="nav-link">Rentals</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </li>
                            <li className="nav-item cta">
                                <Link to="/login" className="nav-link"><span>Login</span></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;
