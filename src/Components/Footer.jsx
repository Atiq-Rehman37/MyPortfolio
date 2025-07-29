import React from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
} from "react-icons/fa";

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
        <a href="tel:+923427621056" target="blank">
          <FaPhoneAlt size={25} color="#1E90FF" />
        </a>
        <a href="https://github.com/Atiq-Rehman37" target="blank">
          <FaGithub size={25} color="#e0c7c7ff" />
        </a>
        <a
          href="https://www.linkedin.com/in/atiq-rehman-wordpress-developer930b/"
          target="blank"
        >
          <FaLinkedinIn size={25} color="#0077B5" />
        </a>
        <a href="https://wa.me/923427621056" target="blank">
          <FaWhatsapp size={25} color="#25D366" />
        </a>
        <a href="mailto:atiq0046@gmail.com" target="blank">
          <FaEnvelope size={25} color="#FF6F61" />
        </a>
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
