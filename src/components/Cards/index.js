import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUmbrellaBeach,
    faHeart,
    faSearchLocation,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'

class Cards extends Component {

    render() {
        return (
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
        );
    }

}

export default Cards;
