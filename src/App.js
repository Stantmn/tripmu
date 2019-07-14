import React, { Fragment } from "react";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = ( { children } ) => (
    <Fragment>
        <Menu/>
        <div className="content">
            { children }
        </div>
        <Footer/>
    </Fragment>
);

export default App;
