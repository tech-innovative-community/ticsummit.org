import React from "react";
import "./Special.css";
import specialImg from "../../Images/2.jpg";
import ReactPlayer from "react-player/youtube";

const Special = () => {
  return (
    <div className="Special">
      <p>
        What makes TiC <span>Special</span>
      </p>
      <div className="specialContainer">
        <div className="leftSpecial">
          <div className="specials">
            <div className="p">01</div>
            <div className="text">
              Cameroon first and largest Tech innovation challenge for secondary
              and high school students.
            </div>
          </div>
          <div className="specials">
            <div className="p">02</div>
            <div className="text">
              All students have a brilliant side to them, we're looking for this
              and providing a platform to inspire, mentor, grow and empower them
              to emerge in the future as Tech entrepreneurs and leaders.
            </div>
          </div>
          <div className="specials">
            <div className="p">03</div>
            <div className="text">
              TiC provides oppurtunities for the youths to innovate, express and
              showcase their creativity and solve problems using technology
            </div>
          </div>
        </div>
        <div className="rightSpecial">
          <ReactPlayer
            className="react-player"
            width="100%"
            height="100%"
            url="https://youtu.be/8GbabdQT6RQ"
          />
          {/* <img src={specialImg} alt="Tech Innvation Challenge" /> */}
        </div>
      </div>
    </div>
  );
};

export default Special;
