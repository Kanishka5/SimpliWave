import React from "react";
import { Line } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

const data = {
  datasets: [
    {
      x: 10,
      y: 20
    },
    {
      x: 15,
      y: 10
    }
  ]
};

const GraphDtl = () => {
  return (
    <div style={{ margin: "10vh 0", marginLeft: "19vw" }}>
      <h1 style={{ marginBottom: "5vh" }}>Project Detail</h1>
      <Fade>
        <div
          style={{
            height: "50vh",
            width: "70vw",

            backgroundColor: "rgb(246, 246, 249)",
            boxShadow: "-1px 5px 9px 1px #3e419c59"
          }}
        >
          <Line data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </Fade>
    </div>
  );
};

export default GraphDtl;
