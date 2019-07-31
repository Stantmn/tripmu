import React, {Component} from 'react'

class Deals extends Component {

    render() {
        return (
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
        );
    }

}

export default Deals;
