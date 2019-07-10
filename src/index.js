import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import * as serviceWorker from './serviceWorker'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import reducer from './reducers';
import Menu from "./components/Menu";
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
// import About from "./components/About";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Menu/>
            <div className="content">
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                </div>
            </div>
            <Footer/>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
