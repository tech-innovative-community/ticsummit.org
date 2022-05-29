import React from "react";
import landingImg from "../../Images/landing.jpg";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="Landing" id="home">
      <div className="landingContainer">
        <div className="leftLanding">
          <img src={landingImg} alt="tic summit 2022" />
        </div>
        <div className="rightLanding">
          <div className="topRight__landing">
            <p className="header">
              {" "}
              Inspiring and Empowering the next <span>generation</span> of
              african techprenuers
            </p>

            <p className="desc">
              TiC is a growing community of innovators, built on the strength of
              young, impact-driven Cameroonians. We're passionate about solving
              problems using technology. Share this same passion? Join us at
              this year's technovation challenge, designed for secondary and
              high school students across Cameroon. Register today with your
              team and your projeect, together let's build the future we
              deserve.
            </p>
          </div>
          <button className="applyBtn">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSel09AGU6V5Uo-qz-7kQTXB1ttbXyW5ikelKXfpHfdRfpGwQg/viewform"
              rel="noreferrer"
              target="_blank"
            >
              Apply now
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
