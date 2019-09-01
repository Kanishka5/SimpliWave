import React from "react";
import { Bar } from "react-chartjs-2";
import Fade from "react-reveal/Fade";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

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
    <div
      style={{
        position: "relative",
        marginTop: "10vh",
        width: window.innerWidth > breakpoints.tablet ? "72vw" : "80vw",
        height: "57vh",
        marginLeft: window.innerWidth > breakpoints.tablet ? "15vw" : "10vw",
        borderRadius: 7,
        background:
          "linear-gradient(to right, rgb(152, 129, 245), rgb(218, 120, 214), rgb(252, 122, 177), rgb(255, 138, 146), rgb(255, 161, 127)) rgb(62, 65, 156)"
      }}
    >
      <h1
        style={{
          paddingLeft: 10,
          marginBottom: "5vh",
          position: "absolute",
          bottom:
            window.innerWidth > breakpoints.tablet
              ? localStorage.getItem("type") === "client"
                ? 25
                : "-29vh"
              : "-3vh"
        }}
      >
        Ongoing projects
      </h1>
      <Fade>
        <div
          style={{
            height: "50vh",
            width: window.innerWidth > breakpoints.tablet ? "70vw" : "75vw",
            marginLeft:
              window.innerWidth > breakpoints.tablet ? "1vw" : "2.5vw",
            position: "absolute",
            top: "-2vh",
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
