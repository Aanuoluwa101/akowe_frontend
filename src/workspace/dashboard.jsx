import React from "react";
import SideBar from "./sidebar";
import './dashboard.css'
import { useSelector } from "react-redux";

const Dashboard = ({children}) => {
  const username = useSelector(state => state.auth.name)

  return (
    <section className="overallDashboard">
      <div className="sidebarContainer">
        <SideBar />
      </div>

      <div className="canvas">
        <div className="dashboardHeader"><p>Hello, {username || 'user'}</p></div>
        <div>{children}</div>
      </div>
    </section>
  );
};

export default Dashboard;
