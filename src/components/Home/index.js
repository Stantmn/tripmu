import React, {Component} from 'react'
import Cards from '../Cards';
import Deals from '../Deals';
import MainForm from '../MainForm';

class Home extends Component {

    render() {
        return (
            <React.Fragment>
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
                                <h5 className="text-white">
                                    You just need to choose dates, set some filters and we will find and provide to you better results and
                                    best deals for your next travel including flights, hotels, car rentals.
                                </h5>
                                <button href="/" className="btn btn-primary text-uppercase">Get Started</button>
                            </div>
                            <div className="col-lg-5 col-md-6 banner-right">
                                <MainForm />
                            </div>

                        <Cards />
                        </div>
                    </div>
                </div>
                <section className="shift-section services-section bg-light">
                    <div className="container">
                    </div>
                </section>
                <Deals />
            </React.Fragment>
        );
    }

}

export default Home;
