import React from "react";
import Grid from "@material-ui/core/Grid";
import Fade from "react-reveal/Fade";

const styles = {
  main: {
    width: "73%",
    margin: "3% 13.5%"
  },
  box: {
    margin: "0px 8%",
    textAlign: "center",
    padding: "5% 0",
    backgroundColor: "rgb(246, 246, 249)",
    borderRadius: 2,
    boxShadow: "rgba(128, 128, 128, 0.38) -2px 2px 4px 2px"
  }
};

const Infocard = () => {
  return (
    <div classname='info' style={{ marginTop: "6vh" }}>
      <h1 style={{ paddingLeft: "15vw", paddingTop: "5vh" }}>Overview</h1>
      <Fade bottom>
        <Grid container spacing={20} style={styles.main}>
          <Grid item lg={4}>
            <div className='cards' style={styles.box}>
              <p>Number of ongoing projects:</p>
              <h4>5</h4>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className='cards' style={styles.box}>
              <p>Number of Completed projects:</p>
              <h4>7</h4>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className='cards' style={styles.box}>
              <p>Number of posted projects:</p>
              <h4>5</h4>
            </div>
          </Grid>
        </Grid>
      </Fade>
    </div>
  );
};

export default Infocard;
