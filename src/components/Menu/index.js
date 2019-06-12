import React, {Component} from 'react'

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
                                <a href="/" className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">About</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Tour</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Hotels</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href="/" className="nav-link">Contact</a>
                            </li>
                            <li className="nav-item cta">
                                <a href="/" className="nav-link"><span>Add listing</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

export default Menu;
