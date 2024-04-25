import React from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconMapPin } from "@tabler/icons-react";

const SideBar = () => {
  const menuItems = [
    {
      name: "Officiators",
      url: "/dashboard/officiators",
    },
  ];

  const parish = useSelector(state => state.auth.parish)

  return (
    <section className="overallContainer">
      <Link
        style={{ textDecoration: "none", color: "#fff" }}
        to="/"
        className="sidebarLogo"
      >
        Akowe
      </Link>
      <div className="menuItems">
        {menuItems.map((menu, index) => (
          <div key={index}>
            <Link style={{ textDecoration: "none" }} to={menu.url}>
              <p className="menu">{menu.name}</p>
            </Link>
          </div>
        ))}
      </div>
      <div className="parishContainer">
       <span><IconMapPin/></span> <p>{parish}</p>
      </div>
    </section>
  );
};

export default SideBar;
