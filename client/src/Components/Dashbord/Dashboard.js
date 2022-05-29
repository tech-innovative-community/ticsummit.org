import React from "react";
import Charts from "../charts/Charts";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <Charts />
      <div className="dashboard__container">
        <div className="dashboard__container-users">users</div>
        <div className="dashboard__container-posts">posts</div>
      </div>
    </div>
  );
};

export default Dashboard;
