import React from "react";
import {
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import "./ContactCard.css";

const contacts = [
  {
    icon: <FaLinkedinIn size={35} color="#0077B5" />,
    title: "LinkedIn",
    subtitle: "Reach out to us",
    link: "https://www.linkedin.com/in/atiq-rehman-wordpress-developer930b/",
  },
  {
    icon: <FaPhoneAlt size={35} color="#1E90FF" />,
    title: "Call Us",
    subtitle: "+92 3427621056",
    link: "tel:+923427621056",
  },
  {
    icon: <FaWhatsapp size={35} color="#25D366" />,
    title: "WhatsApp",
    subtitle: "Chat with us instantly",
    link: "https://wa.me/923427621056",
  },
  {
    icon: <FaEnvelope size={35} color="#FF6F61" />,
    title: "Email",
    subtitle: "atiq0046@gmail.com",
    link: "mailto:atiq0046@gmail.com",
  },
];

const ContactCard = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="container text-white pb-5">
          <h1 className="text-center fw-semibold">
            Get <span className="highlighted-name">In Touch</span>
          </h1>
        </div>
      </div>
      <div className="row g-4">
        {contacts.map((contact, index) => (
          <div key={index} className="col-md-6">
            <a
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="contact-card p-4 rounded-4 text-center text-white py-5 border-start border-3">
                <div className="icon-wrapper mb-3">{contact.icon}</div>
                <h5 className="fw-bold text-white">{contact.title}</h5>
                <p className="mb-0">{contact.subtitle}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
