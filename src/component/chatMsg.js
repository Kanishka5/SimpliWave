import React from "react";

export default ({ name, message }) => (
  <p style={styles.txt}>
    <strong>{name}</strong> : <em>{message}</em>
  </p>
);

const styles = {
  txt: {
    color: "#9881F5",
    paddingLeft: "1rem"
  }
};
