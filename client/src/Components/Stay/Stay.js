import React from "react";
import "./Stay.css";

const Stay = () => {
  return (
    <div className="Stay">
      <div className="stayContainer">
        <div className="leftContainer">
          <p className="heading">STAY UPDATED</p>
          <p>
            Be the first to know about the program and application updates,
            communication, spotlights, our latest events and more!
          </p>
        </div>
        <div className="rightContainer">
          <input type="text" placeholder="Firstname" />
          <input type="text" placeholder="Lastname" />
          <input type="email" placeholder="Email" />
          <button className="send">send</button>
        </div>
      </div>
    </div>
  );
};

export default Stay;
