import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUmbrellaBeach,
    faHeart,
    faSearchLocation,
    faPhone,
    faEnvelope,
    faMapMarker
} from '@fortawesome/free-solid-svg-icons'

class Home extends Component {

    render() {
        return (
            <div className="content">
                <div className="header-img"
                     style={{
                         backgroundImage: 'url(' + process.env.PUBLIC_URL + 'images/bg_1.jpg)',
                         backgroundRepeat: 'no-repeat'
                     }}>
                    <div className="container">
                        <div className="row fullscreen justify-content-between">
                            <div className="col-lg-6 col-md-6 banner-left">
                                <h6 className="text-white">It was never so easy to</h6>
                                <h1 className="text-white">Find a trip</h1>
                                <p className="text-white">
                                    You just need to choose dates, set some filters and we will find and get better results for you
                                    and best deals for your travel include flights, hotels, car rentals.
                                </p>
                                <button href="/" className="btn btn-primary text-uppercase">Get Started</button>
                            </div>
                            <div className="col-lg-5 col-md-6 banner-right">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="flight-tab" data-toggle="tab" href="#trip"
                                           role="tab" aria-controls="trip" aria-selected="true">Trip</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="hotel-tab" data-toggle="tab" href="#hotel"
                                           role="tab"
                                           aria-controls="hotel" aria-selected="false">Hotel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="flight-tab" data-toggle="tab" href="#flight"
                                           role="tab" aria-controls="flight" aria-selected="false">Flight</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="car-tab" data-toggle="tab" href="#car"
                                           role="tab" aria-controls="car" aria-selected="false">Car</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="trip" role="tabpanel"
                                         aria-labelledby="trip-tab">
                                        <form className="form-wrap">
                                            <input type="text" className="form-control" name="name" placeholder="From"/>
                                            <input type="text" className="form-control" name="to" placeholder="To "/>
                                            <input type="text" className="form-control date-picker" name="start"
                                                   placeholder="Start "/>
                                            <input type="text" className="form-control date-picker" name="return"
                                                   placeholder="Return "/>
                                            <input type="number" min="1" max="20" className="form-control" name="adults"
                                                   placeholder="Adults "/>
                                            <input type="number" min="1" max="20" className="form-control"
                                                   name="children" placeholder="Children "/>
                                            <button href="#" className="btn btn-primary text-uppercase">Search Trip
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="hotel" role="tabpanel"
                                         aria-labelledby="hotel-tab">
                                        <form className="form-wrap">
                                            <input type="text" className="form-control" name="name" placeholder="From"/>
                                            <input type="text" className="form-control" name="to" placeholder="To "/>
                                            <input type="text" className="form-control date-picker" name="start"
                                                   placeholder="Start "/>
                                            <input type="text" className="form-control date-picker" name="return"
                                                   placeholder="Return "/>
                                            <input type="number" min="1" max="20" className="form-control" name="adults"
                                                   placeholder="Adults "/>
                                            <input type="number" min="1" max="20" className="form-control" name="child"
                                                   placeholder="Child "/>
                                            <button href="#" className="btn btn-primary text-uppercase">Search Hotel
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="flight" role="tabpanel"
                                         aria-labelledby="flight-tab">
                                        <form className="form-wrap">
                                            <input type="text" className="form-control" name="name" placeholder="From"/>
                                            <input type="text" className="form-control" name="to" placeholder="To "/>
                                            <input type="text" className="form-control date-picker" name="start"
                                                   placeholder="Start "/>
                                            <input type="text" className="form-control date-picker" name="return"
                                                   placeholder="Return "/>
                                            <input type="number" min="1" max="20" className="form-control" name="adults"
                                                   placeholder="Adults "/>
                                            <input type="number" min="1" max="20" className="form-control" name="child"
                                                   placeholder="Child "/>
                                            <button href="#" className="btn btn-primary text-uppercase">Search Flight
                                            </button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="car" role="tabpanel"
                                         aria-labelledby="car-tab">
                                        <form className="form-wrap">
                                            <input type="text" className="form-control" name="name" placeholder="From"/>
                                            <input type="text" className="form-control" name="to" placeholder="To "/>
                                            <input type="text" className="form-control date-picker" name="start"
                                                   placeholder="Start "/>
                                            <input type="text" className="form-control date-picker" name="return"
                                                   placeholder="Return "/>
                                            <input type="number" min="1" max="20" className="form-control" name="adults"
                                                   placeholder="Adults "/>
                                            <input type="number" min="1" max="20" className="form-control" name="child"
                                                   placeholder="Child "/>
                                            <button href="#" className="btn btn-primary text-uppercase">Search Car
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="row card-row">
                                <div className="col-sm-3">
                                    <div className="card text-center">
                                        <div className="card-block">
                                            <h1><FontAwesomeIcon icon={faUmbrellaBeach} /></h1>
                                            <h4 className="card-title">Best Price Guarantee</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                lead-in to
                                                additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card text-center">
                                        <div className="card-block">
                                            <h1><FontAwesomeIcon icon={faSearchLocation}/></h1>
                                            <h4 className="card-title">Best Travel Agent</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                lead-in to
                                                additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card text-center">
                                        <div className="card-block">
                                            <h1><FontAwesomeIcon icon={faHeart} /></h1>
                                            <h4 className="card-title">Travellers Love Us</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                lead-in to
                                                additional content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="card text-center">
                                        <div className="card-block">
                                            <h1><FontAwesomeIcon icon={faPhone}/></h1>
                                            <h4 className="card-title">Our Dedicated Support</h4>
                                            <p className="card-text">This card has supporting text below as a natural
                                                lead-in to
                                                additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="shift-section services-section bg-light">
                    <div className="container">
                    </div>
                </section>
                <section className="deals">
                    <div className="container">
                        <div className="row justify-content-start mb-5 pb-3">
                            <div className="col-md-7 heading-section ftco-animate">
                                <span className="subheading">Featured</span>
                                <h2 className="mb-4"><strong>Hot</strong> Trips</h2>
                            </div>
                        </div>
                        <div className="row card-row">
                            <div className="col-sm-3">
                                <div className="card text-center">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/destination-2.jpg'} alt="Hot deals" />
                                    <div className="card-body">
                                        <h4 className="card-title">San Francisco, USA</h4>
                                        <p>$120 for 5 days</p>
                                        <p className="card-text">
                                            This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                        <button className="btn btn-primary">Get Deal</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/destination-5.jpg'} alt="Hot deals" />
                                    <div className="card-body">
                                        <h4 className="card-title">Sidney, Australia</h4>
                                        <p>$120 for 5 days</p>
                                        <p className="card-text">
                                            This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                        <button className="btn btn-primary">Get Deal</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/destination-6.jpg'} alt="Hot deals" />
                                    <div className="card-body">
                                        <h4 className="card-title">Beijing, China</h4>
                                        <p>$120 for 5 days</p>
                                        <p className="card-text">
                                            This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                        <button className="btn btn-primary">Get Deal</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card text-center">
                                    <img className="card-img-top" src={process.env.PUBLIC_URL + 'images/destination-4.jpg'} alt="Hot deals" />
                                    <div className="card-body">
                                        <h4 className="card-title">Lion, Singapore</h4>
                                        <p>$120 for 5 days</p>
                                        <p className="card-text">
                                            This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                        <button className="btn btn-primary">Get Deal</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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

            </div>
        );
    }

}

export default Home;
