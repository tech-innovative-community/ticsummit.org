import React from "react";
import "./About.css";
import img1 from "../../Images/2.jpg";
import img2 from "../../Images/1.jpg";

const About = () => {
  return (
    <div className="About">
      <div className="aboutContainer">
        <div className="topContainer">
          <p>ABOUT TiC</p>
          <div className="p">
            TiC is a growing community of innovators, built on the strength of
            young, impact-driven Cameroonians. We're passionate about solving
            problems using technology. Share this same passion? Join us at this
            year's technovation challenge, designed for secondary and high
            school students across Cameroon. Register today with your team and
            your projeect, together let's build the future we deserve.
          </div>
        </div>
        <div className="bottomContainer">
          <div className="p">
            <p>
              TiC is Building the next generation of African entrepreneurs in
              STEM. Be transformed by our unique training programs on buisness
              planning, public speaking, design thinking, and leadership.
            </p>
          </div>
          <div className="img">
            <div className="img1">
              <img src={img1} alt="Tech Innvation Challenge" />
            </div>
            <div className="img2">
              <img src={img2} alt="Tech Innvation Challenge" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
