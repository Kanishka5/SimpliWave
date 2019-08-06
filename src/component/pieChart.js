import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  datasets: [
    {
      data: [20, 30]
    }
  ],
  backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
  borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
  borderWidth: 1,
  labels: ["Completed", "Ongoing"]
};

const PieChart = () => {
  return (
    <div
      style={{
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
      <p>Project 'no'</p>
    </div>
  );
};

export default PieChart;
