import React from "react";
import { FaCode, FaWordpress, FaPaintBrush } from "react-icons/fa";
import "./Servicescard.css";

const services = [
  {
    icon: <FaCode size={50} color="#0d6efd" />,
    title: "Web Development",
    text: "Modern, responsive websites designed to engage users and deliver results — from sleek landing pages to powerful web applications.",
  },
  {
    icon: <FaWordpress size={50} color="#21759b" />,
    title: "WordPress Solutions",
    text: "Custom WordPress themes, plugin integration, and tailored solutions for content management and business growth.",
  },
  {
    icon: <FaPaintBrush size={50} color="#d63384" />,
    title: "Graphic Designing",
    text: "Creative and impactful designs for web, print, and branding — logos, social media, and promotional assets.",
  },
];

const Servicescard = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
        {services.map((service, index) => (
          <div className="col-md-4" key={index}>
            <div className="card Scard  h-100 text-center p-3 shadow-sm border-0">
              <div className="d-flex justify-content-center align-items-center rounded-circle mx-auto mb-3">
                {service.icon}
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">{service.title}</h5>
                <p className="card-text text-white">{service.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicescard;
