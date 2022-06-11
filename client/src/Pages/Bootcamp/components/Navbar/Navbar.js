import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  const [color, setColor] = useState(false);

  function changeNavBackgroundColor() {
    if (window.scrollY >= 70) {
      setColor(true);
    } else {
      setColor(false);
    }
  }

  window.addEventListener("scroll", changeNavBackgroundColor);

  return (
    <div className={color ? "bootcamp__navbar present" : "bootcamp__navbar"}>
      <div className="bootcamp__navbar__container">
        <div className="logo">
          <p>
            TiC<span>bootcamp</span>
          </p>
        </div>

        <div className="navbar__container-items">
          <ul className="navabr__routes">
            <li className="route">Campuses</li>
            <li className="route">Location</li>
            <li className="route">Task submission</li>
            <li className="route">Events</li>
          </ul>
          <button>Apply Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
