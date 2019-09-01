import React, { Component } from "react";
import { Pie } from "react-chartjs-2";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};
const data = {
  datasets: [
    {
      data: [20, 30, 40]
    }
  ],
  backgroundColor: [
    "rgba(255, 99, 132, 0.2)",
    "rgba(54, 162, 235, 0.2)",
    "rgba(54, 162, 235, 0.2)"
  ],
  borderColor: [
    "rgba(255, 99, 132, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(54, 162, 235, 1)"
  ],
  borderWidth: 1,
  labels: ["Completed", "Ongoing", "backlog"]
};

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }
  componentDidMount() {
    console.log(localStorage.getItem("porject"));
    if (localStorage.getItem("project")) {
      this.setState({
        name: localStorage.getItem("project")
      });
    }
  }
  render() {
    return (
      <div
        style={{
          display: window.innerWidth > breakpoints.tablet ? "block" : "none",
          height: "20vh",
          width: "15vw",
          marginLeft: "2vw",
          backgroundColor: "#f6f6f9",
          borderRadius: "2%",
          padding: "5% 0",
          textAlign: "center",
          boxShadow: "-1px 5px 9px 1px #3e419c59"
        }}
      >
        <Pie data={data} options={{ maintainAspectRatio: false }} />
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default PieChart;
