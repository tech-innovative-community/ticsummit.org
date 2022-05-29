import React from "react";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="Benefits">
      <div className="benefitsContainer">
        <p>
          ALL THE TEAMS SELECTED FOR THE TiC GRAND FINALE IN YAOUNDE RECEIVE
          ACCESS TO THE FOLLOWING BENEFITS
        </p>
        <div className="benefits first">
          <div className="leftBenefits">
            <i class="fa-solid fa-street-view"></i>
            <p>RECIDENTIAL SUMMIT</p>
          </div>
          <div className="rightBenefits">
            An innovation to attend a fully-funded <br /> three-days residential
            summit in Yaounde <br /> with other 3 members of your team. Along
            site with <br /> other teams that were selected for the cohort-to be
            <br />
            held in a rotating location.
          </div>
        </div>
        <div className="benefits">
          <div className="leftBenefits">
            <i class="fa-solid fa-sun"></i>
            <p>MENTORSHIP</p>
          </div>
          <div className="rightBenefits">
            Need a helping hand with your project, or <br /> perhaps just a
            supervisor? Your team will <br />
            enjoy our highly skilled mentors and <br />
            trainers, each with a background in STEM
          </div>
        </div>
        <div className="benefits">
          <div className="leftBenefits">
            <i class="fa-solid fa-fill-drip"></i>
            <p>SKILL BUILDING</p>
          </div>
          <div className="rightBenefits">
            Don't just learn, build and innovate. The best
            <br /> teams will benefit from our special training <br />
            workshops in Yaounde, led by the experts from
            <br /> around the country, at soome of the major tech
            <br /> centers in the city.
          </div>
        </div>
        <div className="benefits">
          <div className="leftBenefits">
          <i class="fa-solid fa-user-tie"></i>
            <p>ENTREPRENEURSHIP</p>
          </div>
          <div className="rightBenefits">
            TiC is Building the next generation of African <br />
            entrepreneurs in STEM. Be transformed by our
            <br /> unique training programs on buisness planning,
            <br /> public speaking, design thinking, and leadership.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
