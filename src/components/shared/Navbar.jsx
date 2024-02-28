import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light ps-2 pe-2"
        style={{ backgroundColor: "#F0EBE3" }}
      >
        <div className="container-fluid">
          <Link to="/home">
            <img
              src="./assets/gravityLogoFinalOne.png"
              className="img-fluid"
              style={{ maxWidth: "185px" }}
              alt="logo"
            ></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ms-3 me-3 fw-semibold">
                <Link
                  className="nav-link text-dark"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item ms-3 me-3 fw-semibold">
                <Link className="nav-link text-dark" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown ms-3 me-3 fw-semibold">
                <span
                  className="nav-link dropdown-toggle text-dark"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </span>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/web" className="dropdown-item text-dark">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/app">
                      App Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/erp">
                      ERP Development
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item text-dark" to="/cloud">
                      Cloud Management
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ms-3 me-3 fw-semibold">
                <Link to="/career" className="nav-link text-dark">
                  Career
                </Link>
              </li>
              <li className="nav-item ms-3 me-3 fw-semibold">
                <Link to="/contact-us" className="nav-link text-dark">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
