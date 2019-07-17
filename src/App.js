import React, {Component} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import CustomersList from "./component/CustomerList";
import CustomerCreateUpdate from "./component/CustomerCreateUpdate";
import "./App.css";

const BaseLayout = () => (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">Django React Demo</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="nav-item nav-link" to="/">CUSTOMERS</Link>
                    <Link className="nav-item nav-link" to="/customer">CREATE CUSTOMER</Link>
                </div>
            </div>
        </nav>
        <div className="content">
            <Route path="/" exact component={CustomersList}/>
            <Route path="/customer/:pk" component={CustomerCreateUpdate}/>
            <Route path="/customer/" exact component={CustomerCreateUpdate}/>
        </div>
    </div>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <BaseLayout/>
            </BrowserRouter>
        )
    }
}

export default App;