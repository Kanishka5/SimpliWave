import React, { Component } from "react";
import Logo from "../assets/image/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isTop: true
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
  }

  onScroll(isTop) {
    this.setState({ isTop });
  }
  render() {
    return (
      <div style={this.state.isTop ? styles.navbarTop : styles.navbar}>
        <img
          src={Logo}
          alt='logo'
          style={{ height: "100%", marginLeft: "1%" }}
        />
      </div>
    );
  }
}

export default Navbar;

const styles = {
  navbar: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(246, 246, 249)",
    zIndex: 5,
    boxShadow: "rgb(139, 139, 196) 1px 2px 8px"
  },
  navbarTop: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "rgba(246, 246, 249,0)",
    zIndex: 5
  }
};
