import React, {Component} from 'react'

class Login extends Component {

    render() {
        return (
            <div className="header-img"
                 style={{
                     backgroundImage: 'url(' + process.env.PUBLIC_URL + 'images/bg_1.jpg)',
                     backgroundRepeat: 'no-repeat'
                 }}>
                <div className="container">
                    <div className="row fullscreen justify-content-between">
                        <div className="col-lg-6 col-md-6 banner-left">
                            <h1>Login</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
