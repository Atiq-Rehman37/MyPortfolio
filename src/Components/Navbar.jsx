import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="me-2 fs-3 d-flex align-items-center gap-2">
        <NavLink to="/" className="text-white text-decoration-none">
          <span className="fw-bold">Atiq</span>
        </NavLink>
        <NavLink to="/" className="text-white text-decoration-none fs-3">
          <span className="fw-bold" style={{ color: "#6366f1" }}>
            Rehman
          </span>
        </NavLink>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNav"
      >
        <ul className="navbar-nav mx-auto d-flex gap-4">
          <li className="nav-item">
            <NavLink className="nav-link text-white fs-5" to="/projects">
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white fs-5" to="/about">
              About Me
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-white fs-5" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="d-flex gap-2">
          <button
            className="btn text-white fs-5 fw-600"
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
