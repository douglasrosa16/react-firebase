import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';

function Navbar(props){
    return <nav className="navbar fixed-top navbar-expand-md navbar-dark">

    <div className="container-fluid">
            
        <a className="navbar-brand" href="#">
          <img src="/Images/logo.png" alt="" height="28" />
        </a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={props.link} className="nav-link" aria-current="page">{props.title}</Link>
            </li>            
          </ul>
        </div>    
      
    </div>
  </nav>;
  }

export default Navbar;