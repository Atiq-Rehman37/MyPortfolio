import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent position-relative">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center gap-1 fs-3 text-white"
        >
          <span className="fw-bold">Atiq</span>
          <span className="fw-bold" style={{ color: "#6366f1" }}>
            Rehman
          </span>
        </NavLink>

        {/* Toggler */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Links - Centered */}
        <div
          className="collapse navbar-collapse justify-content-center overlay-menu"
          id="navbarNav"
        >
          <ul className="navbar-nav text-start ps-3 ps-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/about">
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5 text-white" to="/contact">
                Contact
              </NavLink>
            </li>

            {/* Hire Me for mobile view */}
            <li className="nav-item d-lg-none mt-3">
              <button
                className="btn text-white fs-5 fw-semibold px-3"
                style={{ backgroundColor: "#6366f1" }}
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>

        {/* Hire Me Button - Desktop Only */}
        <div className="d-none d-lg-flex ms-auto">
          <button
            className="btn text-white fs-5 fw-semibold px-3"
            style={{ backgroundColor: "#6366f1" }}
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
