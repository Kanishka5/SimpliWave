import React from "react";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Infocard from "./component/infocard";
import Graph from "./component/graph";
import Project from "./component/projects";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Infocard />
      <Graph />
      <Project />
    </div>
  );
};

export default Dashboard;
