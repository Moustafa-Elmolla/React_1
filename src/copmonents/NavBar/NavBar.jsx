import React from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery";


const NavBar = () => {
  return (
    <>
  <nav className="navbar navbar-expand-lg back_color navbar-dark fixed-top nav_edit">
  <div className="container">
    <Link className="navbar-brand" id='logo' to="">START REACT</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link p-lg-3 active" aria-current="page" to="portfolio">PORTFOILO</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-lg-3" to="about">ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link p-lg-3" to="contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default NavBar;
