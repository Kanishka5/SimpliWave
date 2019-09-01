import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";

import webD1 from "../assets/image/webD1.png";
import webD2 from "../assets/image/webD2.png";
import design1 from "../assets/image/design1.png";
import design2 from "../assets/image/design2.png";
import app1 from "../assets/image/app1.png";
import app2 from "../assets/image/app2.png";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    padding: "0.7% 2%"
    //   position: "absolute",
    //   bottom: "10vh",
    //   left: "7%"
  }
}));

const style = {
  container: {
    backgroundColor: "#CCE8CC",
    // height: "80vh",
    padding: "10vh 0",
    position: "relative"
  },
  header: {
    color: "rgba(223, 18, 25, 0.12)",
    fontSize: "4.5em",
    textAlign: "center"
  },
  header2: {
    fontSize: "3.5em",
    width: window.innerWidth > breakpoints.tablet ? "auto" : "100%",
    position: "absolute",
    top: window.innerWidth > breakpoints.tablet ? "12vh" : "15vh",
    left: window.innerWidth > breakpoints.tablet ? "37%" : "0",
    color: "#553C8B",
    letterSpacing: 2,
    textAlign: "center"
  },
  srvcCont: {
    margin:
      window.innerWidth > breakpoints.tablet
        ? "20vh 30vh 15% 15%"
        : "15vh auto auto",
    position: "relative",
    display: "flex",
    flexDirection: window.innerWidth > breakpoints.tablet ? "row" : "column"
  },
  appimg1: {
    display: window.innerWidth > breakpoints.tablet ? "block" : "none",
    width: "41%",
    boxShadow: "-12px 12px 2px #2B3A8E"
  },
  appimg2: {
    width: window.innerWidth > breakpoints.tablet ? "40%" : "80%",
    position: window.innerWidth > breakpoints.tablet ? "absolute" : "static",
    marginLeft: window.innerWidth > breakpoints.tablet ? 0 : "10%",
    left: "14%",
    top: "19vh",
    boxShadow: "-12px 12px 2px #DF1219"
  },
  designimg1: {
    display: window.innerWidth > breakpoints.tablet ? "block" : "none",
    width: "41%",
    marginLeft: "10%",
    boxShadow: "-12px 12px 2px #2B3A8E"
  },
  designimg2: {
    width: window.innerWidth > breakpoints.tablet ? "39%" : "80%",
    marginLeft: window.innerWidth > breakpoints.tablet ? 0 : "10%",
    position: window.innerWidth > breakpoints.tablet ? "absolute" : "Static",
    right: "25%",
    top: "13vh",
    boxShadow: "-12px 12px 2px #DF1219"
  },
  webimg1: {
    width: window.innerWidth > breakpoints.tablet ? "41%" : "80%",
    marginLeft: "10%",
    boxShadow: "-12px 12px 2px #2B3A8E"
  },
  webimg2: {
    display: window.innerWidth > breakpoints.tablet ? "block" : "none",
    width: "27%",
    position: " absolute",
    left: "2%",
    top: "10vh",
    boxShadow: "-12px 12px 2px #DF1219"
  },
  webtxt: {
    marginLeft: "5vw"
  },
  webtxt2: {
    marginLeft: window.innerWidth > breakpoints.tablet ? "1vw" : "5vw"
  },
  txth1: {
    margin: 0,
    marginTop: window.innerWidth > breakpoints.tablet ? 0 : "6vh",
    fontSize: "2em",
    color: "#DF1219"
  },
  txtp: {
    fontSize: "1.5em",
    color: "#553C8B"
  }
};

const Services2 = () => {
  const classes = useStyles();
  return (
    <div style={style.container}>
      <h1 style={style.header}>SERVICES</h1>
      <Rotate bottom left>
        <h1 style={style.header2}>Our Services</h1>
      </Rotate>

      {/* Web development */}
      <div style={style.srvcCont}>
        <Slide left>
          <img src={webD1} alt='webdev1' style={style.webimg1} />
          <img src={webD2} alt='webdev2' style={style.webimg2} />
        </Slide>

        <Slide right>
          <div style={style.webtxt}>
            <h1 style={style.txth1}>Web development</h1>
            <p style={style.txtp}>
              Want a website that defines the true essence of your business?
            </p>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Learn More
            </Button>
          </div>
        </Slide>
      </div>

      {/* Design */}
      <div style={style.srvcCont}>
        <Slide left>
          <div style={{ ...style.webtxt2, order: 2 }}>
            <h1 style={style.txth1}>Design</h1>
            <p style={style.txtp}>
              Logo, User Interface, Product, Fashion - We have got it all
              covered!
            </p>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Learn More
            </Button>
          </div>
        </Slide>
        <Slide right>
          <img src={design2} alt='design2' style={style.designimg1} />
          <img src={design1} alt='design1' style={style.designimg2} />
        </Slide>
      </div>

      {/* App development */}
      <div style={style.srvcCont}>
        <Slide left>
          <img src={app2} alt='app1' style={style.appimg2} />
          <img src={app1} alt='app2' style={style.appimg1} />
        </Slide>

        <Slide right>
          <div style={style.webtxt}>
            <h1 style={style.txth1}>App Development</h1>
            <p style={style.txtp}>
              Get your business on the fast-paced tech world by establishing
              your presence on the mobile!
            </p>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}
            >
              Learn More
            </Button>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Services2;
