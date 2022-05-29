import React from "react";
import { Outlet } from "react-router-dom";
import "./Container.scss";

const Container = () => {
  return (
    <div className="Container">
      <Outlet />
    </div>
  );
};

export default Container;
