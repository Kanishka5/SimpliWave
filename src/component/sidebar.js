import React, { Component } from "react";
import "../staticfiles/css/sidebar.css";
import Avatar from "./avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../staticfiles/css/nav.css";
import axios from "axios";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};
const host = process.env.REACT_APP_HOST;
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_: new Array(),
      hover: false
    };
  }

  onHover = () => {
    this.setState({
      hover: true
    });
    console.log(this.state.hover);
  };

  unHover = () => {
    this.setState({
      hover: false
    });
  };

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
    let menuIcon = document.querySelector(".menuIcon");
    let menuItems = document.querySelector("#menu");
    let nav = document.querySelector(".overlay-menu");

    menuIcon.addEventListener("click", () => {
      if (nav.style.transform !== "translateX(0%)") {
        nav.style.transform = "translateX(0%)";
        nav.style.transition = "transform 0.2s ease-out";
      } else {
        nav.style.transform = "translateX(-200%)";
        nav.style.transition = "transform 0.2s ease-out";
      }
    });

    // Toggle Menu Icon ========================================
    let toggleIcon = document.querySelector(".menuIcon");

    toggleIcon.addEventListener("click", () => {
      if (toggleIcon.className !== "menuIcon toggle") {
        toggleIcon.className += " toggle";
      } else {
        toggleIcon.className = "menuIcon";
      }
    });

    // menuItems.addEventListener("click", () => {
    //   nav.style.transform = "translateX(-200%)";
    //   nav.style.transition = "transform 0.2s ease-out";
    //   toggleIcon.className = "menuIcon";
    // });
  }

  render() {
    const styles = {
      items: {
        color: "white",
        width: "100%",
        textAlign: "center",
        backgroundImage: this.state.hover
          ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
          : "none",
        padding: "1rem"
      }
    };

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
      <div>
        {/* desktop sidebar */}
        <div
          className='sidebar'
          style={{
            display: window.innerWidth > breakpoints.tablet ? "block" : "none"
          }}
        >
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
            <p
              style={styles.items}
              onMouseEnter={this.onHover}
              onMouseLeave={this.unHover}
            >
              <Link
                to='/chat'
                style={{
                  textDecoration: "none",
                  color: this.state.hover ? "" : "white"
                }}
              >
                CHATS
              </Link>
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
        {/* menu button */}
        <div
          className='menuIcon'
          style={{
            display: window.innerWidth > breakpoints.tablet ? "none" : "block"
          }}
        >
          <span className='icon icon-bars' />
          <span className='icon icon-bars overlay' />
        </div>
        {/* responsive sidebar */}
        <div
          className='overlay-menu'
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 600,
            display: window.innerWidth > breakpoints.tablet ? "none" : "block"
          }}
        >
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
            <p
              style={styles.items}
              onMouseEnter={this.onHover}
              onMouseLeave={this.unHover}
            >
              <Link
                to='/chat'
                style={{
                  textDecoration: "none",
                  color: this.state.hover ? "" : "white"
                }}
              >
                CHATS
              </Link>
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
      </div>
    );
  }
}

export default Sidebar;
