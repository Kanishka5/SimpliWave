import React from "react";
import EchOffers from "./echoffers";

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

const Offers = () => {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.header}>Recieved offers</h1>
      <EchOffers name='the simpliwave project' />
      <EchOffers name='the simpliwave project' />
      <EchOffers name='the simpliwave project' />
      <EchOffers name='the simpliwave project' />
    </div>
  );
};

export default Offers;
