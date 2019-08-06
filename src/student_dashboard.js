import React, { Component } from "react";
import Sidebar from "./component/sidebar";
import Graph from "./component/graph";
import Infocard from "./component/infocard";
import Offers from "./component/offers";
import Navbar from "./component/navbar";
import Project from "./component/projects";
import Axios from "axios";

class StdDashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <Infocard />
        <Graph />
        <Offers />
      </div>
    );
  }
}

export default StdDashboard;
