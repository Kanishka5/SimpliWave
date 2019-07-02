import React from "react";
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)"
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)"
      ],
      borderWidth: 1
    }
  ]
};

const Graph = () => {
  return (
    <div style={{ marginTop: "10vh" }}>
      <h1 style={{ paddingLeft: "15vw", marginBottom: "5vh" }}>
        Ongoing projects
      </h1>
      <Fade>
        <div
          style={{
            height: "50vh",
            width: "70vw",
            marginLeft: "15vw",
            backgroundColor: "rgb(246, 246, 249)",
            boxShadow: "-1px 5px 9px 1px #3e419c59"
          }}
        >
          <Bar data={data} options={{ maintainAspectRatio: false }} />
        </div>
      </Fade>
    </div>
  );
};

export default Graph;
