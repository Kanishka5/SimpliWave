import React, { Component } from "react";
import Logo from "../assets/image/logo.png";
import Axios from "axios";
import { withRouter } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true,
      loginedIn: localStorage.getItem("jwttoken"),
      name: ""
    };
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
    Axios.get(
      `http://localhost:8000/${localStorage.getItem(
        "type"
      )}/user/${localStorage.getItem("Id")}`
    ).then(json => {
      console.log(json.data.first_name);
      this.setState({
        name: json.data.first_name
      });
    });
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  render() {
    const dashboard = () => {
      if (localStorage.getItem("type") == "student")
        this.props.history.push("/stddashboard");
      else this.props.history.push("/cltdashboard");
    };
    const logout = () => {
      Axios.post("http://localhost:8000/logout");
      localStorage.setItem("jwttoken", "");
      localStorage.setItem("userinfo", "");
      this.setState({ loginedIn: "" });
    };
    let user = [];
    if (!this.state.loginedIn) {
      user.push(
        <div>
          <a href='/login'>Login</a>
        </div>
      );
    } else {
      user.push(
        <div style={styles.userIn}>
          <h1
            style={{ paddingRight: "1rem", color: "black" }}
            onClick={dashboard}
          >
            {this.state.name}
          </h1>
          <button onClick={logout}>logout</button>
        </div>
      );
    }
    return (
      <div style={this.state.isTop ? styles.navbarTop : styles.navbar}>
        <a href='/'>
          <img
            src={Logo}
            alt='logo'
            style={{ height: "100%", marginLeft: "1%" }}
          />
        </a>
        <div style={styles.user}>{user}</div>
        <div />
      </div>
    );
  }
}

export default withRouter(Navbar);

const styles = {
  navbar: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(246, 246, 249)",
    zIndex: 5,
    boxShadow: "rgb(139, 139, 196) 1px 2px 8px",
    display: "flex",
    flexDirection: "row"
  },
  navbarTop: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(246, 246, 249,0)",
    zIndex: 5,
    display: "flex",
    flexDirection: "row"
  },
  user: {
    alignSelf: "center",
    position: "absolute",
    right: 25
  },
  userIn: {
    display: "flex",
    alignItems: "center"
  }
};
