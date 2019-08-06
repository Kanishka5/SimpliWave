import React from "react";

const styles = {
  wraper: {
    display: "flex",
    justifyContent: "space-around",
    background: "#f3efef",
    margin: "1vh 1vw"
  }
};

const EchOffers = props => {
  return (
    <div style={styles.wraper}>
      <p>{props.name}</p>
      <p>{props.duration} weeks</p>
      <p>Rs. {props.amount}</p>
    </div>
  );
};

export default EchOffers;
