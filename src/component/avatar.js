import React, { Component } from "react";
import Axios from "axios";
import avatar from "../assets/image/about_1.jpg";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};
const host = process.env.REACT_APP_HOST;

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      rank: 0
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    this.setState({
      name: user.name
    });
    Axios.get(`${host}/student/ranking/?studentId=${user.id}`).then(json => {
      console.log(json);
      this.setState({
        rank: json.data[0].rank
      });
    });
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "10vh 0"
        }}
      >
        <img
          src={avatar}
          alt='profile_pic'
          style={{
            borderRadius: "50%",
            width: window.innerHeight > breakpoints.tablet ? "8vw" : "30vw",
            height: window.innerHeight > breakpoints.tablet ? "8vw" : "30vw"
          }}
        />
        <p
          style={{
            color: "rgb(246, 246, 249)",
            fontSize: "1.2rem",
            letterSpacing: 0.3
          }}
        >
          {this.state.name}
        </p>
        <h1
          style={{
            display:
              localStorage.getItem("type") == "student" ? "block" : "none"
          }}
        >
          Rank:{this.state.rank}
        </h1>
        <p
          style={{
            display:
              localStorage.getItem("type") == "student" ? "block" : "none"
          }}
        >
          Exp:
        </p>
        <div style={styles.bar}>
          <div style={styles.progress} />
        </div>
      </div>
    );
  }
}

export default Avatar;

const styles = {
  bar: {
    background: "white",
    width: window.innerHeight > breakpoints.tablet ? "9vw" : "50vw",
    height: 5,
    display: localStorage.getItem("type") == "student" ? "block" : "none"
  },
  progress: {
    background: "greenyellow",
    width: "7vw",
    height: 5
  }
};
