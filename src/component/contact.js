import React from "react";
import "../staticfiles/css/contact.css";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";

import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faPhoneAlt,
  faMailBulk
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

const styles = {
  container: {
    height: "80vh",
    padding: "10vh 0",
    backgroundColor: "#ff5656",
    position: "relative"
  },
  header: {
    color: "rgba(255, 255, 255, 0.47)",
    fontSize: "4.5rem",
    textAlign: "center"
  },
  header2: {
    fontSize: "5.1rem",
    position: "absolute",
    top: "11vh",
    left: "39%",
    color: "#553C8B",
    letterSpacing: 2
  },
  main: {
    width: "60%",
    margin: "10vh 20%",
    position: "relative",
    zIndex: 2,
    boxShadow: "7px 8px 12px #00000045"
  },
  icons: {
    width: "10%",
    padding: "2vh 27%",
    marginLeft: "23vw",
    marginTop: "-11vh",
    zIndex: 5,
    backgroundColor: "#936be8"
  }
};

const Contact = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>CONTACT</h1>
      <Rotate bottom left>
        <h1 style={styles.header2}>Contact Us</h1>
      </Rotate>

      <Fade>
        <Grid container spacing={0} style={styles.main}>
          <Grid item lg={4}>
            <div className='each_contact'>
              <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 60 }} />
              <h1>VISIT US</h1>
              <p>3rd floor, 738 Diamond Harbour Road, Kolkata - 700008</p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className='each_contact middle'>
              <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 60 }} />
              <h1>CALL US</h1>
              <p>+918870682063</p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className='each_contact'>
              <FontAwesomeIcon icon={faMailBulk} style={{ fontSize: 60 }} />
              <h1>MAIL US</h1>
              <p>info@simpliwave.co</p>
              <p>helpline@simpliwave.co</p>
            </div>
          </Grid>
        </Grid>
      </Fade>
      <Grid container spacing={1} style={styles.icons}>
        <Grid item lg={4}>
          <a>
            <FontAwesomeIcon icon={faFacebookSquare} style={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item lg={4}>
          <a>
            <FontAwesomeIcon icon={faTwitterSquare} style={{ fontSize: 30 }} />
          </a>
        </Grid>
        <Grid item lg={4}>
          <a>
            <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 30 }} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
