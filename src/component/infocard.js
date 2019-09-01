import React, { Component } from "react";
import CountUp from "react-countup";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { Link } from "react-router-dom";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const styles = {
  main: {
    width: "73%",
    margin: "3% 13.5%",
    justifyContent: window.innerWidth > breakpoints.tablet ? "auto" : "center"
  },
  box: {
    width: window.innerWidth > breakpoints.tablet ? "auto" : "50vw",
    margin: window.innerWidth > breakpoints.tablet ? "0px 8%" : "2vh 0",
    textAlign: "center",
    padding: "10% 0",
    backgroundColor: "rgb(246, 246, 249)",
    borderRadius: 7,
    boxShadow: "rgba(128, 128, 128, 0.38) -2px 2px 4px 2px"
  },
  txt: {
    color: "white"
  }
};

class Infocard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: 0,
      completed: 0,
      applied: 0,
      posted: 0
    };
  }
  componentDidMount() {
    const host = process.env.REACT_APP_HOST;
    const user = JSON.parse(localStorage.getItem("userinfo"));
    const token = localStorage.getItem("jwttoken");
    if (localStorage.getItem("type") == "student") {
      //ongoing projects
      Axios.get(
        `${host}/employee/project-manage/?studentid=${user.id}&&status=In-Progress`
      ).then(response => {
        this.setState({
          ongoing: response.data.length
        });
      });
      //completed projects
      Axios.get(
        `${host}/employee/project-manage/?studentid=${user.id}&&status=Completed`
      ).then(response => {
        console.log(response.data);
        this.setState({
          completed: response.data.length
        });
      });
      //applied projects
      Axios.get(`${host}/student/project-apply/?stdid=${user.id}`).then(
        response => {
          console.log(response.data);
          this.setState({
            applied: response.data.length
          });
        }
      );
    } else {
      //posted projects
      Axios({
        method: "get",
        url: `${host}/client/project/?username=${user.email}`,
        headers: {
          Authorization: `token ${token}`
        }
      }).then(response => {
        this.setState({
          posted: response.data.length
        });
        console.log("posted:", response.data.length);
      });
      //completed projects
      Axios.get(
        `${host}/employee/project-manage/?clientid=${user.id}&&status=Completed`
      ).then(response => {
        console.log(response.data);
        this.setState({
          completed: response.data.length
        });
      });
      //ongoing projects
      Axios.get(
        `${host}/employee/project-manage/?clientid=${user.id}&&status=In-Progress`
      ).then(response => {
        console.log(response.data);
        this.setState({
          ongoing: response.data.length
        });
      });
    }
  }
  render() {
    let project = [];
    if (localStorage.getItem("type") == "student") {
      project.push(
        <Link to='/apply' style={{ textDecoration: "none" }}>
          <p style={styles.txt}>Apply to New project</p>
          <h4 styles={styles.txt}>+</h4>
        </Link>
      );
    } else {
      project.push(
        <Link to='/projectform' style={{ textDecoration: "none" }}>
          <p style={styles.txt}>New project</p>
          <h4>+</h4>
        </Link>
      );
    }
    let children = [];
    if (localStorage.getItem("type") == "client") {
      children.push(
        <Link to='/prjctposted' style={{ textDecoration: "none" }}>
          <p style={styles.txt}>Number of Posted projects:</p>
          <h4>
            <CountUp delay={1.5} end={this.state.posted} duration={4} />
          </h4>
        </Link>
      );
    } else {
      children.push(
        <div>
          <p style={styles.txt}>Number of applied projects:</p>
          <h4>
            <CountUp delay={1.5} end={this.state.applied} duration={4} />
          </h4>
        </div>
      );
    }
    return (
      <div classname='info' style={{ paddingTop: "7vh" }}>
        <Fade bottom>
          <Grid container spacing={20} style={styles.main}>
            <Grid item lg={3}>
              <div
                className='cards'
                style={{
                  ...styles.box,
                  backgroundImage:
                    "linear-gradient(to left top, #ff8379, #fd7b71, #fa7368, #f86b60, #f56358)",
                  boxShadow: "rgba(128, 128, 128, 0.38) -2px 2px 4px 2px"
                }}
              >
                {project}
              </div>
            </Grid>
            <Grid item lg={3}>
              <div
                className='cards'
                style={{
                  ...styles.box,
                  backgroundImage:
                    "linear-gradient(to left top, #64a4b1, #5c9ba8, #55929f, #4d8a96, #46818d)"
                }}
              >
                <p style={styles.txt}>Number of ongoing projects:</p>
                <h4>
                  <CountUp delay={1.5} end={this.state.ongoing} duration={4} />
                </h4>
              </div>
            </Grid>
            <Grid item lg={3}>
              <div
                className='cards'
                style={{
                  ...styles.box,
                  backgroundImage:
                    "linear-gradient(to left top, #ed9bf4, #e88eef, #e280ea, #dd72e5, #d764e0)"
                }}
              >
                <p style={styles.txt}>Number of Completed projects:</p>
                <h4>
                  <CountUp
                    delay={1.5}
                    end={this.state.completed}
                    duration={4}
                  />
                </h4>
              </div>
            </Grid>
            <Grid item lg={3}>
              <div
                className='cards'
                style={{
                  ...styles.box,
                  backgroundImage:
                    "linear-gradient(to left top, #f9d68b, #fad17c, #facd6c, #fbc85c, #fbc34b)"
                }}
              >
                {children}
              </div>
            </Grid>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default Infocard;
