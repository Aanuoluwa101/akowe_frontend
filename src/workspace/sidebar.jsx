import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";

const SideBar = () => {
  const menuItems = [
    {
      name: "Conductors",
      url: "/dashboard/conductors",
    },
    {
      name: "Give Feedback",
      url: "/dashboard/feedback",
    },
  ];

  return (
    <section className="overallContainer">
      <Link style={{ textDecoration: "none", color: '#fff' }} to='/' className="sidebarLogo">Akowe</Link>
      <div className="menuItems">
        {menuItems.map((menu, index) => (
          <div key={index}>
            <Link style={{ textDecoration: "none" }} to={menu.url}>
              <p className="menu">{menu.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
