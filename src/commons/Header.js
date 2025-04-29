import React from "react";
import { Link, useLocation } from "react-router-dom";
import '../commons/Header.css';
import logo from '../assets/logo.jpeg';

function Header() {
  const location = useLocation();

  return (
    <div className="Header">
      {/* Top purple bar */}
      <div className="top-bar">
        <div className="logo-title">
          <img src={logo} alt="Logo" className="logo" />
          <h3>Doctor Finder</h3>
        </div>
        <div className="login-button">
          {/* Corrected login link */}
          <Link to="/login">
            <button className="login-btn">LOGIN</button>
          </Link>
        </div>
      </div>

      {/* White nav section */}
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active-link' : ''}
          >
            DOCTORS
          </Link>
        </li>
        <li>
          <Link
            to="/Appointment"
            className={location.pathname === '/Appointment' ? 'active-link' : ''}
          >
            APPOINTMENT
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
