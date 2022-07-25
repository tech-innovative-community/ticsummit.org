import React from "react";
import Footer from "../../Components/Footer/Footer";
import { Navbar, Wrapper, LifeChanging, Testimonials } from "./index";
import { video, bootcamp, img1 } from "../../Images/";
// import
import "./Bootcamp.scss";

const Bootcamp = () => {
  return (
    <div className="app__bootcamp" id="bootcamp">
      <div className="bootcamp__container">
        <Navbar />
        <div className="bootcamp__header">
          <video loop autoPlay muted src={video} />
          <div className="header__container">
            <div className="left__container">
              <h1>
                Increase your earning power, by learning a{" "}
                <span> digital skill</span>.
              </h1>
              <p>
                TiC teaches you how to transform the world with technology and
                re-invent yourself, with the <b>best coding bootcamps</b> in Web
                development, Graphic Designing and a Microsoft office Suites.
              </p>

              <div className="btn__container">
                <button>
                  <a href="#courses">Discover our courses</a>
                </button>
                <button>
                  <a
                    href="https://ticsummit.org/about"
                    target="_blank"
                    rel="noreferrer"
                  >
                    About TiC
                  </a>
                </button>
              </div>
            </div>
            <div className="right__container">
              <img src={img1} alt="" />
            </div>
          </div>
        </div>
        <Wrapper />
        <LifeChanging />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Bootcamp;
