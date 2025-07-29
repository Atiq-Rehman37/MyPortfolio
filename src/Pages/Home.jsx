import React from "react";
import Herosection from "../Components/Herosection";
import Projectsection from "../Components/Projectsection";
import Servicescard from "../Components/Servicescard";
const Home = () => {
  return (
    <div>
      <Herosection></Herosection>
      <Projectsection></Projectsection>
      <div className="container text-white">
        <h1 className="text-center fw-semibold mb-3">Our Services</h1>
      </div>
      <Servicescard></Servicescard>
    </div>
  );
};

export default Home;
