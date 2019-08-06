import React, { Component } from "react";
import EchOffers from "./echoffers";
import Axios from "axios";

const styles = {
  wrapper: {
    width: "60vw",
    marginLeft: "15vw",
    background: "white",
    position: "relative",
    margin: "10vh 15vw",
    padding: "7vh 0",
    borderRadius: 7
  },
  header: {
    background: "#3e419c",
    width: "56vw",
    position: "absolute",
    padding: "1.5vh 1vw",
    left: "1vw",
    textAlign: "center",
    top: -37
  }
};

class Offers extends Component {
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    Axios.get(
      `http://localhost:8000/student/project-apply/?sdtid=${user.id}`
    ).then(response => {
      console.log(response.data);
      this.setState({
        applied: response.data.length
      });
    });
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
