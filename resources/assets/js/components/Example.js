import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    Route,
    NavLink,
    HashRouter,
    BrowserRouter
  } from "react-router-dom"
import {Header} from "./Header"
import {Home} from "./Home"
import {Add} from "./Add"

export default class Example extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
                <Header/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/add" component={Add}/>
                        </div>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        );
    }
}

