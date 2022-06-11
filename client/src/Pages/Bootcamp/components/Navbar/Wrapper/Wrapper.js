import React from "react";

const Wrapper = () => {
  return (
    <div className="bootcamp__wrapper" id="courses">
      <p>
        Discover what our <span>bootcamp provide</span>
      </p>
      <div className="wrapper__container">
        <div className="bootcamp__provision">
          <h1>
            <i class="fa-solid fa-laptop-code"></i>
            web development courses
          </h1>
          <p>
            From the introduction of how the web came about, you'll learn all
            the skill of being a Software Developer and code your own web
            application form scratch
          </p>
        </div>
        <div className="bootcamp__provision">
          <h1>
            <i class="fa-solid fa-compass-drafting"></i>
            graphic designing courses
          </h1>
        </div>
        <div className="bootcamp__provision">
          <h1>
            <i class="fa-brands fa-microsoft"></i> microsoft office courses
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
