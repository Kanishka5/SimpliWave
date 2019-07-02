import React from "react";
import "../staticfiles/css/about.css";
import About1 from "../assets/image/about_1.jpg";
import About2 from "../assets/image/about_2.jpg";

const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <div className="image1">
        <img src={About1} />
      </div>
      <div className="image2">
        <img src={About2} />
      </div>
      <div className="text">
        <p>
          Following the vision of our parent company, EDX Technologies,
          SimpliWave aims at bridging gaps between businesses looking for
          specialised services to expand or grow and students looking for work
          experience.
        </p>
        <p>
          Why do companies hire college graduates or interns? Is it just because
          they want to train a new workforce? Maybe. But we, at SimpliWave
          believe that all companies look to hire fresh college or school
          students as interns or full-time workers because they value the fresh,
          creative and innovative problem-solving skills that the students
          bring. It was this belief that made us realise that if students are
          the innovators and problem solvers for tomorrow, why not give them the
          opportunity to start doing that right now.
        </p>
      </div>
    </div>
  );
};

export default About;
