import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top navbar-dark text-center">
      <div className="container">
        Portofolio
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main"
          aria-controls="main"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <i className="fa-solid fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="main">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active p-2 p-lg-3 "
                aria-current="page"
                to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active p-2 p-lg-3"
                aria-current="page"
                to="service">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active p-2 p-lg-3"
                aria-current="page"
                href="#">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active p-2 p-lg-3"
                aria-current="page"
                to="about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active p-2 p-lg-3"
                aria-current="page"
                href="#">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
