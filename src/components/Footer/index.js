import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHeart,
    faPhone,
    faEnvelope,
    faMapMarker
} from '@fortawesome/free-solid-svg-icons'

class Footer extends Component {

    render() {
        return (

            <footer className="footer bg-dark">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md">
                        <div className="footer-widget mb-4">
                            <a className="heading-2" href="/"><b>Trip</b><b style={{color: '#f85959'}}>Mu</b></a>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and
                                Consonantia, there live the blind texts.</p>
                            <ul className="footer-social list-unstyled float-md-left float-lft mt-5">
                                <li className="animate"><FontAwesomeIcon icon={"facebook"} /></li>
                                <li className="animate"><FontAwesomeIcon icon={"twitter"} /></li>
                                <li className="animate"><FontAwesomeIcon icon={"instagram"} /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="footer-widget mb-4 ml-md-5">
                            <h2 className="heading-2">Information</h2>
                            <ul className="list-unstyled">
                                <li><span className="py-2 d-block">About</span></li>
                                <li><span className="py-2 d-block">Service</span></li>
                                <li><span className="py-2 d-block">Terms and Conditions</span></li>
                                <li><span className="py-2 d-block">Become a partner</span></li>
                                <li><span className="py-2 d-block">Best Price Guarantee</span></li>
                                <li><span className="py-2 d-block">Privacy and Policy</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="footer-widget mb-4">
                            <h2 className="heading-2">Customer Support</h2>
                            <ul className="list-unstyled">
                                <li><span className="py-2 d-block">FAQ</span></li>
                                <li><span className="py-2 d-block">Payment Option</span></li>
                                <li><span className="py-2 d-block">Booking Tips</span></li>
                                <li><span className="py-2 d-block">How it works</span></li>
                                <li><span className="py-2 d-block">Contact Us</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="footer-widget mb-4">
                            <h2 className="heading-2">Have a Questions?</h2>
                            <div className="block-23 mb-3">
                                <ul>
                                    <li><FontAwesomeIcon icon={faMapMarker} />
                                    <span className="text"> 203 Fake St. Mountain View, San Francisco, California, USA</span>
                                    </li>
                                    <li><FontAwesomeIcon icon={faPhone} />
                                    <span className="text"> +2 392 3929 210</span></li>
                                    <li><FontAwesomeIcon icon={faEnvelope} />
                                        <span className="text"> info@tripmu.com</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 text-center">

                        <p style={{color: '#ffffff'}}>
                            Copyright &copy;
                            <script>document.write(new Date().getFullYear());</script>
                            All rights reserved by
                            <span> <b>Trip</b><b style={{color: '#f85959'}}>Mu</b> </span>
                            <FontAwesomeIcon icon={faHeart} />

                        </p>
                    </div>
                </div>
            </div>
        </footer>
);
    }

}

export default Footer;
