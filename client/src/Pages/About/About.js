import React from "react";
import "../../App.css";
import AContent from "../../Components/About/About";
import Benefits from "../../Components/Benefits/Benefits";
import Dreams from "../../Components/Dreams/Dreams";
import Footer from "../../Components/Footer/Footer";

const About = () => {
  return (
    <div className="AboutContainer" id="about">
      <AContent />
      <Dreams />
      <Benefits />
      <Footer />
    </div>
  );
};

export default About;
