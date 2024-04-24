import React from "react";
import ServiceTable from "./Roster";
import services from "./servicesData";
import Intro from "./intro";
import "./Home.css";

function Home() {
  return (
    <div className="pageContainer">
      <div className="introContainer">
        <Intro />
      </div>

      <div className="tableContainer">
      <h1 className="header">Service Table</h1>
      <ServiceTable services={services} />
      </div>

    </div>
  );
}

export default Home;
