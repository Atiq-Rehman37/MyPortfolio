import React from "react";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div
        className="container text-white text-center py-5"
        style={{ borderTop: "4px solid #102d44" }}
      >
        <h1 fw-semibold mb-3>
          Follow Me
        </h1>
      </div>
      <div className="container mx-auto d-flex gap-4 d-flex justify-content-center mb-5">
        <FaGithubSquare className="fs-1 text-white m-2" />
        <FaLinkedin className="fs-1 text-white m-2" />
        <FaGithubSquare className="fs-1 text-white m-2" />
        <FaLinkedin className="fs-1 text-white m-2" />
      </div>
      <div className="container text-center text-white mb-2">
        <h4 className="lead">
          © 2025 Atiq Rehman. Built with React & Bootstrap 5.
        </h4>
      </div>
    </div>
  );
};

export default Footer;
