import React from "react";
import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  let location = useLocation();
  let page = location.pathname.slice(1);
  return (
    <div className="Footer">
      <div className="footerContainer">
        <div className="content">
          <p>
            Our <span>Programs</span>
          </p>
          <ul>
            <div className="items">
              <span></span>
              <li>TiC Summit.</li>
            </div>
            <div className="items">
              <span></span>
              <li>TiC Startup Fellowship.</li>
            </div>
            <div className="items">
              <span></span>
              <li>TiC Bootcamps.</li>
            </div>
            <div className="items">
              <span></span>
              <li>Tech Services.</li>
            </div>
          </ul>
        </div>
        <div className="content">
          <p>
            Useful <span>Links</span>
          </p>
          <ul>
            <div className="items">
              <span></span>
              <li>About Us</li>
            </div>
            <div className="items">
              <span></span>
              <li>Passt Events</li>
            </div>
            <div className="items">
              <span></span>
              <li>Curriculum</li>
            </div>
            <div className="items">
              <span></span>
              <li>News</li>
            </div>
            <div className="items">
              <span></span>
              <li>Contact</li>
            </div>
          </ul>
        </div>
        <div className="content">
          <p>Office</p>
          <ul>
            <div className="items">
              <span></span>
              <li>CMR, YDE Montee Science</li>
            </div>
            <div className="items">
              <span></span>
              <li>contact@ticsummit.org</li>
            </div>
            <div className="items">
              <span></span>
              <li>+237 679 36 42 94</li>
            </div>
            <div className="items">
              <span></span>
              <li>+237 677 83 04 48</li>
            </div>
          </ul>
        </div>
        <div className="socials">
          <p>Social Media Links</p>
          <div className="links">
            <a href="https://www.instagram.com/tic_summit/">
              <i className="fa-brands fa-instagram-square"></i>
            </a>
            <a href="#home">
              <i className="fa-brands fa-whatsapp-square"></i>
            </a>
            <a
              href="https://www.facebook.com/TiCsummit/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-facebook-square"></i>
            </a>
            <a href="#home">
              <i className="fa-brands fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <button>
          <a href={`#${page}`}>
            <i className="fa-solid fa-arrow-up-long"></i>
          </a>
        </button>
      </div>
      <p>@2022 TiCSummit - All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
