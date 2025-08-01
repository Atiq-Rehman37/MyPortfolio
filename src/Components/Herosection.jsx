import React from "react";
import heroimg from "../assets/heroimg.svg";
import { FaDownload } from "react-icons/fa";
import "./Herosection.css";

const Herosection = () => {
  return (
    <section className="text-white py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="fw-bold">
              HI, I AM <span className="highlighted-name">ATIQ REHMAN</span>
            </h1>
            <p className="lead">A Frontend Developer & Design Enthusiast !</p>
            <a
              href="/cv.pdf"
              className="btn btn-primary mt-3 py-2 px-3"
              target="_blank"
            >
              <span className="fs-5 me-3">
                <FaDownload />
              </span>
              Download CV
            </a>
          </div>

          {/* Right Column */}
          <div className="col-md-6 text-center">
            <img
              src={heroimg}
              alt="Developer working"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
