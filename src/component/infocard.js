import React, { Component } from "react";
import CountUp from "react-countup";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";
import Axios from "axios";

const styles = {
  main: {
    width: "73%",
    margin: "3% 13.5%"
  },
  box: {
    margin: "0px 8%",
    textAlign: "center",
    padding: "10% 0",
    backgroundColor: "rgb(246, 246, 249)",
    borderRadius: 7,
    boxShadow: "rgba(128, 128, 128, 0.38) -2px 2px 4px 2px"
  }
};

class Infocard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ongoing: 0,
      completed: 0,
      applied: 0
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    Axios.get(
      `http://localhost:8000/student/project-compose/?username=${user.email}`
    ).then(response => {
      this.setState({
        ongoing: response.data.length
      });
    });
    Axios.get(
      `http://localhost:8000/student/experience/?sdtid=${user.id}`
    ).then(response => {
      console.log(response.data);
      this.setState({
        completed: response.data.length
      });
    });
    Axios.get(
      `http://localhost:8000/student/project-apply/?sdtid=${user.id}`
    ).then(response => {
      console.log(response.data);
      this.setState({
        applied: response.data.length
      });
    });
  }
  render() {
    return (
      <div classname='info'>
        <h1
          style={{
            paddingLeft: "15vw",
            paddingTop: "5vh",
            marginTop: 0,
            color: "black"
          }}
        >
          Overview
        </h1>

        <Fade bottom>
          <Grid container spacing={20} style={styles.main}>
            <Grid item lg={4}>
              <div className='cards' style={styles.box}>
                <p>Number of ongoing projects:</p>
                <h4>
                  <CountUp delay={1.5} end={this.state.ongoing} duration={4} />
                </h4>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className='cards' style={styles.box}>
                <p>Number of Completed projects:</p>
                <h4>
                  <CountUp
                    delay={1.5}
                    end={this.state.completed}
                    duration={4}
                  />
                </h4>
              </div>
            </Grid>
            <Grid item lg={4}>
              <div className='cards' style={styles.box}>
                <p>Number of posted projects:</p>
                <h4>
                  <CountUp delay={1.5} end={this.state.applied} duration={4} />
                </h4>
              </div>
            </Grid>
          </Grid>
        </Fade>
      </div>
    );
  }
}

export default Infocard;
