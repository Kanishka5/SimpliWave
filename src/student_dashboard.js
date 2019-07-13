import React from "react";
import Sidebar from "./component/sidebar";
import Graph from "./component/graph";
import Infocard from "./component/infocard";
import Offers from "./component/offers";

const StdDashboard = () => {
  return (
    <div>
      <Sidebar />
      <Infocard />
      <Graph />
      <Offers />
    </div>
  );
};

export default StdDashboard;
