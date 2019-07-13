import React from "react";

const styles = {
  txt: {
    width: "70%",
    backgroundColor: "#f6f6f9",
    padding: "10% 5%",
    borderRadius: 4
  },
  box: {
    marginTop: "6vh",
    paddingTop: "6vh",
    marginLeft: "19vw"
  }
};

const EachProject = () => {
  return (
    <div style={styles.box}>
      <h1>Project 1</h1>
      <div style={styles.txt}>
        <p>Name of project</p>
        <p>description of project</p>
        <p>Students working on the project</p>
      </div>
    </div>
  );
};

export default EachProject;
