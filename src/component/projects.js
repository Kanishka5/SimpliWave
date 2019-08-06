import React, { Component } from "react";
import Projects from "./projectDtl";
import PieChart from "./pieChart";
import Zoom from "react-reveal/Zoom";
import axios from "axios";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientprojects: "",
      project_: new Array()
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwttoken");
    const user = JSON.parse(localStorage.getItem("userinfo"));
    axios({
      method: "get",
      url: `http://localhost:8000/client/project/?username=${user.email}`,
      headers: {
        Authorization: `token ${token}`
      }
    })
      .then(json => {
        const projects = json.data;
        console.log(json);
        projects.map(project => {
          this.setState({
            project_: [...this.state.project_, project.name]
          });
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.project_);
    let children = [];
    let len = this.state.project_.length;
    for (let i = 0; i < len; i++) {
      children.push(
        <Projects
          project={this.state.project_[i]}
          name='student'
          deadline='10days'
        />
      );
    }

    return (
      <div
        style={{ marginLeft: "15vw", marginTop: "10vh", marginBottom: "10vh" }}
      >
        <h1 style={{ marginBottom: "5vh", color: "black" }}>Project Details</h1>
        <Zoom bootom>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "53vw",
                borderRadius: 7,
                //   overflow: "hidden",
                backgroundColor: "rgb(246, 246, 249)",
                boxShadow: "-1px 5px 9px 1px #3e419c59",
                paddingTop: "6vh",
                position: "relative"
              }}
            >
              <div
                style={{
                  width: "52vw",
                  backgroundColor: "#3C3C9C",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  position: "absolute",
                  left: "0.5vw",
                  top: "-2vh"
                }}
              >
                <h1>Project</h1>
                <h1>Employee</h1>
                <h1>Deadline</h1>
              </div>
              {children}
            </div>
            <PieChart />
          </div>
        </Zoom>
      </div>
    );
  }
}

export default Project;
