import React from "react";

const Wrapper = () => {
  return (
    <div className="bootcamp__wrapper" id="courses">
      <div className="bootcamp__header-title">
        <p>
          Discover what our <span>bootcamp provide</span>.
        </p>
      </div>
      <div className="wrapper__container">
        <div className="bootcamp__provision">
          <div className="provision__header">
            <h1>
              <i class="fa-solid fa-laptop-code"></i>
              web development courses
            </h1>
            <p>
              From the introduction of how the web came about, you'll learn all
              the skill of being a Software Developer and code your own web
              application from scratch.
            </p>
          </div>
          <hr />
          <div className="duration">
            <p className="duration__paragraph">
              Full Time<span>From Monday to friday (weekly days)</span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="bootcamp__provision">
          <div className="provision__header">
            <h1>
              <i class="fa-solid fa-compass-drafting"></i>
              graphic designing courses
            </h1>
            <p>
              This course will help you explore graphic communication through
              the understanding of the elements and principles of design; as
              well as, the design process, from idea development through the
              final execution of a des document.
            </p>
          </div>
          <hr />
          <div className="duration">
            <p className="duration__paragraph">
              Full Time<span>From Monday to friday (weekly days)</span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
        <div className="bootcamp__provision">
          <div className="provision__header">
            <h1>
              <i class="fa-brands fa-microsoft"></i> microsoft office courses
            </h1>
            <p>
              This course will teaches the basic skills for word processing, for
              creating excel spreadsheets, for building databases and preparing
              presentations, through the use of Microsoft Office Word, Excel,
              Access, and PowerPoint programmes.
            </p>
          </div>
          <hr />
          <div className="duration">
            <p className="duration__paragraph">
              Full Time<span>From Monday to friday (weekly days)</span>
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
