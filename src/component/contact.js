import React from "react";
import "../staticfiles/css/contact.css";
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
  main: {
    width: "60%",
    margin: "-3% 20%"
  },
  icons: {
    width: "10%",
    margin: "15vh 45%",
    marginBottom: 0
  }
};

const Contact = () => {
  return (
    <div style={{ marginTop: "30vh", height: "100vh" }}>
      <div className="contact">
        <h1>Contact Us!</h1>
        <p>
          Need an expert? We are here to listen and help you in every step of
          the path.
        </p>
      </div>
      <Grid container spacing={0} style={styles.main}>
        <Grid item lg={4}>
          <div className="each_contact">
            <FontAwesomeIcon icon={faBuilding} style={{ fontSize: 60 }} />
            <h1>VISIT US</h1>
            <p>3rd floor, 738 Diamond Harbour Road, Kolkata - 700008</p>
          </div>
        </Grid>
        <Grid item lg={4}>
          <div className="each_contact">
            <FontAwesomeIcon icon={faPhoneAlt} style={{ fontSize: 60 }} />
            <h1>CALL US</h1>
            <p>+918870682063</p>
          </div>
        </Grid>
        <Grid item lg={4}>
          <div className="each_contact">
            <FontAwesomeIcon icon={faMailBulk} style={{ fontSize: 60 }} />
            <h1>MAIL US</h1>
            <p>info@simpliwave.co</p>
            <p>helpline@simpliwave.co</p>
          </div>
        </Grid>
      </Grid>
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
