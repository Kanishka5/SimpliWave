import React from "react";
import Projects from "./projectDtl";
import PieChart from "./pieChart";
import Zoom from "react-reveal/Zoom";

const Project = () => {
  return (
    <div
      style={{ marginLeft: "15vw", marginTop: "10vh", marginBottom: "10vh" }}
    >
      <h1 style={{ marginBottom: "5vh" }}>Project Details</h1>
      <Zoom bootom>
        <div style={{ display: "flex" }}>
          <div
            style={{
              width: "53vw",
              borderRadius: 7,
              overflow: "hidden",
              backgroundColor: "rgb(246, 246, 249)",
              boxShadow: "-1px 5px 9px 1px #3e419c59"
            }}
          >
            <div
              style={{
                width: "100%",
                backgroundColor: "#3C3C9C",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around"
              }}
            >
              <h1>Project</h1>
              <h1>Employee</h1>
              <h1>Deadline</h1>
            </div>
            <Projects project='project1' name='student' deadline='10days' />
            <Projects project='project2' name='student2' deadline='5days' />
            <Projects project='project3' name='student3' deadline='10days' />
            <Projects project='project4' name='student4' deadline='12days' />
            <Projects project='project5' name='student5' deadline='17days' />
          </div>
          <PieChart />
        </div>
      </Zoom>
    </div>
  );
};

export default Project;
