import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import * as serviceWorker from './serviceWorker'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import reducer from './reducers';
import App from './App'
import Home from "./components/Home";
import Login from "./components/Login";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={ store }>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/login" component={ Login }/>
                </Switch>
            </App>
        </Router>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
