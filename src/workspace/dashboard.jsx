import React, { useEffect } from "react";
import SideBar from "./sidebar";
import './dashboard.css'

const Dashboard = ({children}) => {
  const userDetails = JSON.parse(localStorage.getItem('userDetails'))

  return (
    <section className="overallDashboard">
      <div className="sidebarContainer">
        <SideBar />
      </div>

      <div className="canvas">
        <div className="dashboardHeader">Hello, {userDetails ? userDetails.name : 'user'}</div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Dashboard;
