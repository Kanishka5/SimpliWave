import React from "react";
import Logo from "../assets/image/logo.png";

const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <img src={Logo} alt='logo' style={{ height: "100%", marginLeft: "1%" }} />
    </div>
  );
};

export default Navbar;

const styles = {
  navbar: {
    width: "100vw",
    height: "6vh",
    position: "fixed",
    top: 0,
    backgroundColor: "#F6F6F9",
    zIndex: 5,
    boxShadow: "rgb(139, 139, 196) 1px 2px 8px"
  }
};
