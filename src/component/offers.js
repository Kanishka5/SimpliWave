import React, { Component } from "react";
import EchOffers from "./echoffers";
import Axios from "axios";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const styles = {
  wrapper: {
    width: window.innerWidth > breakpoints.tablet ? "60vw" : "80",
    marginRght: window.innerWidth > breakpoints.tablet ? "" : "5vw",
    marginLeft: "15vw",
    background: "white",
    position: "relative",
    margin: window.innerWidth > breakpoints.tablet ? "10vh 15vw" : "10vh 10vw",
    padding: "7vh 0",
    borderRadius: 7
  },
  header: {
    background: "#3e419c",
    width: window.innerWidth > breakpoints.tablet ? "56vw" : "76vw",
    position: "absolute",
    padding: "1.5vh 1vw",
    left: "1vw",
    textAlign: "center",
    top: -37,
    backgroundImage:
      "linear-gradient(to right, #9881f5, #da78d6, #fc7ab1, #ff8a92, #ffa17f)"
  }
};

class Offers extends Component {
  componentDidMount() {
    const host = process.env.REACT_APP_HOST;
    const user = JSON.parse(localStorage.getItem("userinfo"));
    Axios.get(`${host}/student/project-apply/?sdtid=${user.id}`).then(
      response => {
        console.log(response.data);
        this.setState({
          applied: response.data.length
        });
      }
    );
  }
  render() {
    return (
      <div style={styles.wrapper}>
        <h1 style={styles.header}>Recieved offers</h1>
        <EchOffers name='WD1' duration='5' amount='5000' />
      </div>
    );
  }
}

export default Offers;
