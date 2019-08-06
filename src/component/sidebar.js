import React, { Component } from "react";
import "../staticfiles/css/sidebar.css";
import Avatar from "./avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_: new Array()
    };
  }
  handleClick() {
    const wrapper = document.getElementById("prjct");
    wrapper.classList.toggle("nav-open");
    console.log("clicked");
  }
  componentDidMount() {
    console.log("In sidebar");
    const token = localStorage.getItem("jwttoken");
    const user = JSON.parse(localStorage.getItem("userinfo"));
    // axios({
    //   method: "get",
    //   url: `http://localhost:8000/student/project-compose/?username=${
    //     user.email
    //   }`,
    //   headers: {
    //     Authorization: `token ${token}`
    //   }
    // })
    //   .then(json => {
    //     const projects = json.data;
    //     console.log(projects);
    //     projects.map(project => {
    //       axios({
    //         method: "get",
    //         url: `http://localhost:8000/client/project/${project.project}`,
    //         headers: {
    //           Authorization: `token ${token}`
    //         }
    //       }).then(project => {
    //         console.log(project.data.name);
    //         this.setState({
    //           project_: [...this.state.project_, project.data.name]
    //         });
    //       });
    //     });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }

  render() {
    let children = [];
    let len = this.state.project_.length;
    for (let i = 0; i < len; i++) {
      children.push(
        <p key={i} style={{ color: "#f6f6f9" }}>
          {this.state.project_[i]}
        </p>
      );
    }
    return (
      <div className='sidebar'>
        <Avatar />
        <div
          id='prjct'
          className='prjct'
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            overflow: "hidden"
          }}
        >
          <p>
            <Link to='/chat'>CHATS</Link>
          </p>
          <p style={{ color: "#f6f6f9" }} onClick={() => this.handleClick()}>
            Projects{" "}
            <FontAwesomeIcon
              icon={faArrowDown}
              style={{ fontSize: "1rem", color: "#fb3a71" }}
            />
          </p>
          {children}
        </div>
      </div>
    );
  }
}

export default Sidebar;
