import React, { Component } from 'react'
import {
    Route,
    NavLink,
    BrowserRouter
  } from "react-router-dom"

export class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-inverse  navbar-static-top" role="navigation">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">SKP FAKULTAS TEKNIK UDAYANA</a>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/add">Form</NavLink>
            </div>
    </nav>
        )
    }
}