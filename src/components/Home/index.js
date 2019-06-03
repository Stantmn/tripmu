import React, {Component} from 'react'

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
                        <div className="row fullscreen align-items-center justify-content-between">
                            <div className="col-lg-6 col-md-6 banner-left">
                                <h6 className="text-white">It's never was so easy to</h6>
                                <h1 className="text-white">Find a trip</h1>
                                <p className="text-white">
                                    You just need to choose dates, set some filters and will find and get better results
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
                        </div>
                        <div className="row card-row">
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card">
                                    <div className="card-block">
                                        <h4 className="card-title">Card title</h4>
                                        <p className="card-text">This card has supporting text below as a natural
                                            lead-in to
                                            additional content.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cards">
                </div>
            </div>
        );
    }

}

export default Home;
