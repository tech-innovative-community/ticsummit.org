import React from "react";
import "./ELegibility.css";

const ELegibility = () => {
  return (
    <div className="ELegibility">
      <p>
        ELegibility <span>Criteria</span>
      </p>
      <div className="eLegibilityContainer">
        <div className="criteria">
          <div className="criteriaContent">
            <div className="p">01</div>
            <div className="text">
              Must be in secondary school and of resident in Cameroon.
            </div>
          </div>
        </div>
        <div className="criteria">
          <div className="criteriaContent">
            <div className="p">02</div>
            <div className="text">Between the age os 11-20 years.</div>
          </div>
        </div>
        <div className="criteria">
          <div className="criteriaContent">
            <div className="p">03</div>
            <div className="text">
              Be passionate about solving problems in your community.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELegibility;
