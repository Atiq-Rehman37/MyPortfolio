import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import "./Contact.css";

const Contactsection = () => {
  return (
    <div className="container contact-container my-2">
      <div className="row g-5 py-3">
        {/* Contact Form */}
        <div className="col-lg-6 shadow-lg py-3">
          <h3 className="mb-4">Contact Form</h3>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control custom-input"
                id="email"
                placeholder="Your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control custom-input"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control custom-input"
                id="message"
                rows="5"
                placeholder="Your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary px-4">
              Send
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="col-lg-6 py-3">
          <h3 className="mb-4">Contact details</h3>
          <div className="contact-details">
            <p className="lead">
              <span className="fs-3 me-3">
                <CiLocationOn />
              </span>
              Street B-5, Rawalpindi, Pakistan
            </p>
            <p className="lead">
              <span className="fs-3 me-3">
                <MdOutlineMail />
              </span>
              atiq0046@gmail.com
            </p>
            <p className="lead">
              <span className="fs-3 me-3">
                <MdOutlineLocalPhone />
              </span>
              +92 3427621056
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactsection;
