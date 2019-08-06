import React, { Component } from "react";
import axios from "axios";
import avatar from "../assets/image/about_1.jpg";

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kanishka"
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    const type = localStorage.getItem("type");
    console.log(user);
    axios({
      method: "get",
      url: `http://127.0.0.1:8000/${type}/profile/${user.id}`
    })
      .then(response => {
        // localStorage.setItem("username", response.data.username);
        this.setState({
          name: response.data.name
        });
      })
      .catch(error => {
        console.error(error);
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
          margin: "5vh 0"
        }}
      >
        <img
          src={avatar}
          alt='profile_pic'
          style={{ borderRadius: "50%", width: "8vw", height: "8vw" }}
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
        {/* <h1
          style={{
            display:
              localStorage.getItem("type") == "student" ? "block" : "none"
          }}
        >
          Rank:1
        </h1> */}
      </div>
    );
  }
}

export default Avatar;
