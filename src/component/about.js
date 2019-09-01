import React from "react";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import "../staticfiles/css/about.css";
import logo from "../assets/image/blurLogo.png";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const style = {
  container: {
    width: "100%",
    height: window.innerWidth > breakpoints.tablet ? "90vh" : "auto",
    textAlign: "center",
    padding: "20vh 0",
    backgroundColor: "#FDFFFC",
    position: "relative"
  },
  header: {
    color: "rgba(223, 18, 25, 0.12)",
    fontSize: window.innerWidth > breakpoints.tablet ? "5rem" : "4.5em"
  },
  header2: {
    fontSize: window.innerWidth > breakpoints.tablet ? "5.1rem" : "3.5em",
    position: "absolute",
    top: window.innerWidth > breakpoints.tablet ? "22vh" : "25vh",
    left: window.innerWidth > breakpoints.tablet ? "41%" : 0,
    width: window.innerWidth > breakpoints.tablet ? "auto" : "100%",
    color: "#553C8B",
    letterSpacing: 2
  },
  logo: {
    position: "absolute",
    height: window.innerWidth > breakpoints.tablet ? "65%" : "auto",
    width: window.innerWidth > breakpoints.tablet ? "auto" : "100%",
    top: window.innerWidth > breakpoints.tablet ? "21vh" : "43vh",
    left: window.innerWidth > breakpoints.tablet ? "27%" : 0
  },
  txt: {
    fontSize: window.innerWidth > breakpoints.tablet ? " 1.7rem" : "1.3em",
    width: window.innerWidth > breakpoints.tablet ? "38vw" : "80vw",
    marginLeft: window.innerWidth > breakpoints.tablet ? "32.5vw" : "10%",
    textAlign: " left",
    marginTop: window.innerWidth > breakpoints.tablet ? "13vh" : 0
  }
};

const About = () => {
  return (
    <div className='about' style={style.container}>
      <h1 style={style.header}>ABOUT</h1>
      <Rotate bottom left>
        <h1 style={style.header2}>About Us</h1>
      </Rotate>

      <img id='about_back' src={logo} alt='logo' style={style.logo} />

      <div className='text' style={style.txt}>
        <Slide bottom>
          <p>
            Following the vision of our parent company, EDX Technologies,
            SimpliWave aims at bridging gaps between businesses looking for
            specialised services to expand or grow and students looking for work
            experience.
          </p>
        </Slide>

        <Slide bottom>
          <p>
            Why do companies hire college graduates or interns? Is it just
            because they want to train a new workforce? Maybe. But we, at
            SimpliWave believe that all companies look to hire fresh college or
            school students as interns or full-time workers because they value
            the fresh, creative and innovative problem-solving skills that the
            students bring. It was this belief that made us realise that if
            students are the innovators and problem solvers for tomorrow, why
            not give them the opportunity to start doing that right now.
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default About;
