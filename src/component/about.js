import React from "react";
import Rotate from "react-reveal/Rotate";
import Slide from "react-reveal/Slide";
import "../staticfiles/css/about.css";
import logo from "../assets/image/blurLogo.png";

const style = {
  container: {
    width: "100%",
    height: "90vh",
    textAlign: "center",
    padding: "20vh 0",
    backgroundColor: "#FDFFFC",
    position: "relative"
  },
  header: {
    color: "rgba(223, 18, 25, 0.12)",
    fontSize: "5rem"
  },
  header2: {
    fontSize: "5.1rem",
    position: "absolute",
    top: "22vh",
    left: "41%",
    color: "#553C8B",
    letterSpacing: 2
  },
  logo: {
    position: "absolute",
    height: "65%",
    top: "21vh",
    left: "27%"
  },
  txt: {
    fontSize: " 1.7rem",
    width: "38vw",
    marginLeft: "32.5vw",
    textAlign: " left",
    marginTop: "13vh"
  }
};

const About = () => {
  return (
    <div className='about' style={style.container}>
      <h1 style={style.header}>ABOUT</h1>
      <Rotate bottom left>
        <h1 style={style.header2}>About Us</h1>
      </Rotate>

      <img src={logo} alt='logo' style={style.logo} />

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
