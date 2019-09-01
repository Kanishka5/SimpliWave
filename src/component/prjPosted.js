import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Navbar from "./navbar";
import Zoom from "react-reveal/Zoom";
import axios from "axios";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const host = process.env.REACT_APP_HOST;
const token = localStorage.getItem("jwttoken");
const user = JSON.parse(localStorage.getItem("userinfo"));

class ProjectPosted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientprojects: "",
      project_: new Array(),
      student: new Array(),
      student_name: new Array(),
      hover: false,
      prjctname: "",
      show: false
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: `${host}/client/project/?username=${user.email}&&status=Approved`,
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

  accept = e => {
    this.props.history.push("/cltdashboard");
    axios({
      method: "put",
      url: `${host}/student/project-apply/${e.target.id}/status/`,
      headers: {
        Authorization: `token ${token}`
      },
      data: {
        status: "Approved"
      }
    });
  };

  details = e => {
    console.log(e.target.id);
    axios({
      method: "get",
      url: `${host}/client/project/?name=${e.target.id}`,
      headers: {
        Authorization: `token ${token}`
      }
    }).then(data => {
      console.log(data);
      this.setState({
        show: true
      });
      axios
        .get(`${host}/student/project-apply/?prjctid=${data.data[0].id}`)
        .then(response => {
          const projects = response.data;
          projects.map(project => {
            this.setState({
              student: [...this.state.student, project.id]
            });
            axios
              .get(`${host}/student/profile/${project.student}/`)
              .then(response => {
                this.setState({
                  student_name: [...this.state.student_name, response.data.name]
                });
              });
          });
        });
    });
  };

  render() {
    // console.log(this.state.project_);
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
          onClick={this.details}
        >
          <p className='pTag'>{this.state.project_[i]}</p>
          <p>student</p>
          <p>10 days</p>
        </div>
      );
    }

    let student = [];
    let len2 = this.state.student.length;
    for (let i = 0; i < len2; i++) {
      student.push(
        <div
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
        >
          <p className='pTag'>{this.state.student_name[i]}</p>
          <a id={this.state.student[i]} onClick={this.accept}>
            Accept
          </a>
        </div>
      );
    }

    if (this.state.show) {
      return (
        <div>
          <Navbar name='Dashboard' />
          <div
            style={{
              marginLeft: "15vw",
              marginTop: "10vh",
              marginBottom: "10vh"
            }}
          >
            <h1 style={{ marginBottom: "5vh", color: "black" }}>
              Project Posted
            </h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "53vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  {student}
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      );
    } else
      return (
        <div>
          <Navbar name='Dashboard' />
          <div
            style={{
              marginLeft: window.innerWidth > breakpoints.tablet ? "15vw" : 0,
              textAlign: "center",
              marginTop: "10vh",
              marginBottom: "10vh"
            }}
          >
            <h1 style={{ marginBottom: "5vh", color: "black" }}>
              Project Posted
            </h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width:
                      window.innerWidth > breakpoints.tablet ? "53vw" : "90vw",
                    marginLeft:
                      window.innerWidth > breakpoints.tablet ? 0 : "5vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  <div
                    style={{
                      width:
                        window.innerWidth > breakpoints.tablet
                          ? "52vw"
                          : "86vw",
                      backgroundImage:
                        "linear-gradient(to right, rgb(152, 129, 245), rgb(218, 120, 214), rgb(252, 122, 177), rgb(255, 138, 146), rgb(255, 161, 127))",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-around",
                      position: "absolute",
                      left:
                        window.innerWidth > breakpoints.tablet
                          ? "0.5vw"
                          : "2vw",
                      top: "-2vh"
                    }}
                  >
                    <h1>Project</h1>
                    <h1>Employee</h1>
                    <h1>Deadline</h1>
                  </div>
                  {children}
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      );
  }
}

export default withRouter(ProjectPosted);
