import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";

import landing1 from "../assets/image/landing1.png";
import landing2 from "../assets/image/landing2.png";
import logo from "../assets/image/logo.png";
import ring1 from "../assets/image/ring1.svg";
import ring2 from "../assets/image/ring2.svg";
import ring3 from "../assets/image/ring3.svg";
import ring4 from "../assets/image/ring4.svg";
import ring5 from "../assets/image/ring5.svg";

import "../staticfiles/css/landing.css";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: "0.7% 2%",
    position: "absolute",
    bottom: "10vh",
    left: "7%"
  },
  button2: {
    margin: theme.spacing(1),
    padding: "0.7% 2.5%",
    position: "absolute",
    bottom: "10vh",
    left: "17%"
  },
  button1: {
    margin: theme.spacing(1),
    padding: "0.7% 2%",
    position: "absolute",
    bottom: "3vh",
    left: "7%"
  },
  button12: {
    margin: theme.spacing(1),
    padding: "0.7% 2.5%",
    position: "absolute",
    bottom: "3vh",
    left: "17.8%"
  }
}));

const style = {
  container: {
    width: "100%",
    height: "100vh",
    backgroundColor: "#CCC1FF"
  },
  image: {
    width: "100%",
    // height: "100vh",
    position: "absolute",
    right: 0,
    zIndex: 2,
    boxShadow: "-7px 7px 7px #65646a45"
  },
  image2: {
    width: "100%",
    // height: "85vh",
    position: "absolute",
    zIndex: 2,
    boxShadow: "-7px 7px 7px #65646a45"
    // right: "32%"
    // top: "20vh"
  },
  header: {
    color: "#553C8B",
    // fontSize: "10.31rem",
    fontSize: "7vw",
    position: "absolute",
    left: "19%",
    top: "3vh",
    textShadow: "-4px 6px #ffffff",
    zIndex: 2
  },
  text: {
    fontSize: "3.1rem",
    // color: "#2B3A8E",
    position: "absolute",
    top: "22vh",
    left: "32%",
    zIndex: 2
  },
  logo: {
    width: "11%",
    position: "absolute",
    left: "12%",
    top: "40vh"
  }
};

const Landing2 = () => {
  const classes = useStyles();
  return (
    <div style={style.container}>
      <div
        className='image-holder'
        style={{
          width: "54%",
          height: "100vh",
          position: "absolute",
          right: 0
        }}
      >
        <Fade>
          <img src={landing1} alt='landing1' style={style.image} />
        </Fade>
      </div>
      <div
        className='image-holder'
        style={{
          width: "33%",
          height: "85vh",
          position: "absolute",
          right: "32%",
          top: "20vh"
        }}
      >
        <Fade>
          <img src={landing2} alt='landing2' style={style.image2} />
        </Fade>
      </div>

      <h1 style={style.header}>
        <span>SIMPLIWAVE</span>
      </h1>

      {/* <div
        className='txt-holder'
        style={{
          position: "absolute",
          top: "22vh",
          left: "32%"
        }}
      >
      </div> */}
      <Fade bottom>
        <p style={style.text}>
          The wave of revolution <br /> in consultancy
        </p>
      </Fade>

      <Fade>
        <div style={style.logo}>
          <img className='ring1' src={ring1} alt='logo' />
          <img className='ring2' src={ring2} alt='logo' />
          <img className='ring3' src={ring3} alt='logo' />
          <img className='ring4' src={ring4} alt='logo' />
          <img className='ring5' src={ring5} alt='logo' />

          <img src={logo} alt='logo' style={{ height: "70%", width: "70%" }} />
        </div>
      </Fade>

      <Button variant='contained' color='secondary' className={classes.button}>
        <Link
          to='/cltsignup'
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Client SignUp
        </Link>
      </Button>
      <Button variant='contained' color='secondary' className={classes.button2}>
        <Link to='/login' style={{ color: "white", textDecoration: "none" }}>
          Client Login
        </Link>
      </Button>

      <Button variant='contained' color='secondary' className={classes.button1}>
        <Link
          to='/stdsignup'
          style={{ color: "white", textDecoration: "none" }}
        >
          {" "}
          Student SignUp
        </Link>
      </Button>
      <Button
        variant='contained'
        color='secondary'
        className={classes.button12}
      >
        <Link to='/login' style={{ color: "white", textDecoration: "none" }}>
          Student Login
        </Link>
      </Button>
    </div>
  );
};

export default Landing2;
