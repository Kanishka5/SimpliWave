import React, { Component } from "react";
import Projects from "./projectDtl";
import PieChart from "./pieChart";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import { Link } from "react-router-dom";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const styles = {
  each: {
    width: "35%",
    textAlign: "center"
  }
};

const host = process.env.REACT_APP_HOST;
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientprojects: "",
      project_: new Array(),
      hover: false,
      prjctname: ""
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("jwttoken");
    const user = JSON.parse(localStorage.getItem("userinfo"));
    axios({
      method: "get",
      url: `${host}/client/project/?username=${user.email}`,
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

  onHover = e => {
    console.log("hover");
    // localStorage.setItem("project", e.target.id);
    // console.log(e.target.id);
    this.setState({
      hover: true,
      prjctname: e.target.id
    });
  };
  unHover = () => {
    this.setState({
      hover: false,
      prjctname: ""
    });
  };

  render() {
    console.log(this.state.project_);
    let children = [];
    let len = this.state.project_.length;
    for (let i = 0; i < len; i++) {
      children.push(
        // <Projects
        //   key={this.state.project_[i]}
        //   project={this.state.project_[i]}
        //   name='student'
        //   deadline='10days'
        // />
        <div
          id={this.state.project_[i]}
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onMouseEnter={this.onHover}
          onMouseLeave={this.unHover}
        >
          <Link
            className='aTag'
            to={{
              pathname: "projectdetails"
              //   state: {
              //     project: { this.props }
              //   }
            }}
            style={{ ...styles.each, textDecoration: "none" }}
          >
            <p className='pTag'>{this.state.project_[i]}</p>
          </Link>

          <p style={styles.each}>student</p>
          <p style={styles.each}>10 days</p>
        </div>
      );
    }

    return (
      <div
        style={{
          marginLeft: window.innerWidth > breakpoints.tablet ? "15vw" : "10vw",
          marginTop: "10vh",
          marginBottom: "10vh"
        }}
      >
        <h1 style={{ marginBottom: "5vh", color: "black" }}>Project Details</h1>
        <Zoom bootom>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: window.innerWidth > breakpoints.tablet ? "53vw" : "80vw",
                borderRadius: 7,
                //   overflow: "hidden",
                background: "#f6f6f9",
                boxShadow: "-1px 5px 9px 1px #3e419c59",
                paddingTop: "6vh",
                position: "relative",
                minHeight: "10vh"
              }}
            >
              <div
                style={{
                  width:
                    window.innerWidth > breakpoints.tablet ? "52vw" : "76vw",
                  backgroundImage:
                    "linear-gradient(to right, rgb(152, 129, 245), rgb(218, 120, 214), rgb(252, 122, 177), rgb(255, 138, 146), rgb(255, 161, 127))",
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
            <PieChart name={this.state.prjctname} />
          </div>
        </Zoom>
      </div>
    );
  }
}

export default Project;
