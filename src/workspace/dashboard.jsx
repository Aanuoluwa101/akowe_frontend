import React from "react";
import SideBar from "./sidebar";
import './dashboard.css'

const Dashboard = () => {
  return (
    <section className="overallDashboard">
      <div className="sidebarContainer">
        <SideBar />
      </div>

      <div className="canvas">
        <div></div>
        <div></div>
      </div>
    </section>
  );
};

export default Dashboard;
