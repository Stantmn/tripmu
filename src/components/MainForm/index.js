import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MainForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            endDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <div>
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
                            <div className="row">
                            <input type="text" className="form-control" name="name" placeholder="From"/>
                            </div>
                            <div className="row">
                            <input type="text" className="form-control" name="to" placeholder="To "/>
                            </div>
                            <div className="row">
                            <div className="col-lg-2">
                                    Start:
                                </div>
                            <div className="col-lg-4">
                                    <DatePicker className="form-control input" type="text"
                                        selected={this.state.startDate}
                                        onChange={this.handleChange}
                                        minDate={new Date()}

                                    />
                                </div>
                                <div className="col-lg-2">
                                    End:
                                </div>
                                <div className="col-lg-4">
                                    <DatePicker className="form-control" type="text"
                                                selected={this.state.endDate}
                                                onChange={this.handleChange}
                                                minDate={this.state.startDate.setDate(this.state.startDate.getDate() + 1)}
                                    />
                            </div>
                            </div>
                            <div className="row">
                                <input type="number" min="1" max="20" className="form-control" name="adults"
                                placeholder="Adults "/>
                            </div>
                            <div className="row">
                                <input type="number" min="1" max="20" className="form-control"
                                name="children" placeholder="Children "/>
                            </div>
                            <div className="row">
                                <button href="#" className="btn btn-primary text-uppercase">Search Trip
                            </button>
                            </div>
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
        );
    }

}

export default MainForm;
