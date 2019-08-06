import React, { Component } from "react";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import Infocard from "./component/infocard";
import Graph from "./component/graph";
import Project from "./component/projects";
import axios from "axios";

class ClientDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Infocard />
        <Graph />
        <Project />
      </div>
    );
  }
}

export default ClientDashboard;
