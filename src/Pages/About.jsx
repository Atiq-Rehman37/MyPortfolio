import React from "react";
import Aboutsection from "../Components/Aboutsection";
import Stats from "../Components/Stats";
import TechStack from "../Components/Techstack";
const About = () => {
  return (
    <div>
      <Aboutsection></Aboutsection>
      <hr />
      <TechStack></TechStack>
      <Stats></Stats>
    </div>
  );
};

export default About;
