import React, { Component } from "react";
import axios from "axios";
import Navbar from "./navbar";
import Button from "@material-ui/core/Button";
import Axios from "axios";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const host = process.env.REACT_APP_HOST;
const handleSubmit = id => {
  const user = JSON.parse(localStorage.getItem("userinfo"));
  Axios.post(`${host}/student/project-apply/`, {
    student: user.id,
    project: id
  }).then(() => {
    console.log("applied");
    this.props.history.push("/stddashboard");
  });
};

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      available: []
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("jwttoken");
    axios({
      method: "get",
      url: `${host}/client/project/?status=Approved`,
      headers: {
        Authorization: `token ${token}`
      }
    }).then(json => {
      json.data.map(projects => {
        this.setState({
          available: [...this.state.available, projects]
        });
      });
    });
  }

  render() {
    let project = [];
    const k = this.state.available;
    console.log(k);
    k.map(s => {
      project.push(
        <div style={styles.each}>
          <p style={{ ...styles.white, ...styles.name }}>{s.name}</p>
          <h1 style={styles.white}>apply by:</h1>
          <p style={styles.white}>{s.applyDueDate}</p>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => handleSubmit(s.id)}
          >
            Apply
          </Button>
        </div>
      );
    });

    return (
      <div style={styles.conatiner}>
        <Navbar name='Dashboard' />
        project list
        <br />
        {project}
      </div>
    );
  }
}

export default ProjectList;

const styles = {
  conatiner: {
    marginTop: "15vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  each: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: window.innerWidth > breakpoints.tablet ? "80vw" : "90vw",
    // smarginLeft: "10vw",
    background: "blue",
    backgroundImage:
      "linear-gradient(to left top, #9881f5, #b47ef0, #cc7cea, #e179e1, #f478d8)",
    margin: "2vh 0",
    padding: "0.3rem",
    borderRadius: "0.5rem"
  },
  yellow: {
    color: "#FFCD64"
  },
  white: {
    color: "white"
  },
  name: {
    width: window.innerWidth > breakpoints.tablet ? "auto" : "40%",
    textAlign: "center",
    padding: window.innerWidth > breakpoints.tablet ? "auto" : "0 5%"
  }
};
