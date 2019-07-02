import React from "react";

const Landing = () => {
  return (
    <div style={styles.landingBack}>
      <div style={styles.mainDiv}>
        <div style={styles.landingText}>
          <h1>SIMPLIWAVE</h1>
          <p>The wave of revolution in consultancy</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;

const styles = {
  mainDiv: {
    height: "90vh",
    width: "90vw",
    marginLeft: "5vw",
    marginTop: "6vh",
    backgroundColor: "whitesmoke"
  },
  landingBack: {
    height: "85vh",
    backgroundColor: "grey"
  },
  landingText: {
    paddingTop: "45vh",
    paddingLeft: "15vw"
  }
};
