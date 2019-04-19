import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './header.css'

export default class Header extends Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand" >Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/one" className="nav-link">Category one</Link>
            </li>
            <li className="nav-item dropdown">
              <Link to="/two" className="nav-link dropdown-toggle " id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                Category Two
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link to="/first" className="dropdown-item">First Items</Link>
                <Link to="/second" className="dropdown-item">Second Items</Link>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    );
  };
};

