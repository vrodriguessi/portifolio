import React from 'react';
import "./Navbar.css"
import logo from '../../assets/images/logo.png';

function Navbar() {
  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img className="logo" src={logo} alt="Logo" />
          <ul>
            <li>
              <a className="menu-item">Home</a>
            </li>
            <li>
              <a className="menu-item">Skills</a>
            </li>
            <li>
              <a className="menu-item">Work Experience</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
