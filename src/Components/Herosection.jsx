import { TypeAnimation } from "react-type-animation";
import heroimg from "../assets/heroimg.svg";
import { FaDownload } from "react-icons/fa";
import "./Herosection.css";

const Herosection = () => {
  return (
    <section className="text-white py-5">
      <div className="container">
        <div className="row align-items-center gy-4 pt-4 pt-md-0">
          {/* Left Column */}
          <div className="col-md-6 text-center text-md-start">
            <h2 className="fw-bold">
              HI, I AM{" "}
              <span className="highlighted-name">
                <TypeAnimation
                  sequence={[
                    "ATIQ REHMAN",
                    2000,
                    "UI Designer",
                    2000,
                    "React Developer",
                    2000,
                  ]}
                  speed={200}
                  deletionSpeed={70}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p className="lead pt-2">
              Crafting beautiful interfaces as a <b>Frontend Developer</b> &
              exploring creativity as a <b>Design Enthusiast</b>!
            </p>
            <a
              href="/cv.pdf"
              className="btn btn-primary mt-3 py-2 px-3"
              target="_blank"
              rel="noopener noreferrer"
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
