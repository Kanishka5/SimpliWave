import React, { Component } from "react";
import Logo from "../assets/image/logo.png";
import Axios from "axios";
import { withRouter } from "react-router-dom";
import Button from "@material-ui/core/Button";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

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
    const host = process.env.REACT_APP_HOST;
    console.log(host);

    document.addEventListener("scroll", () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.onScroll(isTop);
      }
    });
    Axios.get(
      `${host}/${localStorage.getItem("type")}/user/${localStorage.getItem(
        "Id"
      )}`
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
      Axios.post("${host}/logout");
      localStorage.clear();
      this.props.history.push("/");
    };
    let user = [];
    if (!localStorage.getItem("Id")) {
      user.push(
        <div>
          <a href='/login'>Login</a>
        </div>
      );
    } else {
      user.push(
        <div style={styles.userIn}>
          <p
            style={{ paddingRight: "1rem", color: "black" }}
            onClick={dashboard}
          >
            {this.state.name}
          </p>
          <Button
            variant='contained'
            color='secondary'
            onClick={logout}
            type='submit'
            style={{
              padding:
                window.innerWidth > breakpoints.tablet ? "auto" : "0.5vh 2vw"
            }}
          >
            Logout
          </Button>
        </div>
      );
    }
    return (
      <div style={this.state.isTop ? styles.navbarTop : styles.navbar}>
        <a href='/' style={{ width: "5vw" }}>
          <img
            src={Logo}
            alt='logo'
            style={{ height: "100%", marginLeft: "1%" }}
          />
        </a>
        <h2
          onClick={dashboard}
          style={{
            fontSize: window.innerWidth > breakpoints.tablet ? "auto" : "1em",
            marginLeft: window.innerWidth > breakpoints.tablet ? 0 : "7vw"
          }}
        >
          {this.props.name}
        </h2>
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
    backgroundColor: "rgb(246, 246, 249)",
    zIndex: 55,
    boxShadow: "rgb(139, 139, 196) 1px 2px 8px",
    display: "flex",
    flexDirection: "row"
  },
  navbarTop: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "rgb(246, 246, 249)",
    zIndex: 55,
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
