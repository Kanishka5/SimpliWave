import React from "react";
import "../staticfiles/css/services.css";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faDraftingCompass,
  faMobile
} from "@fortawesome/free-solid-svg-icons";

const styles = {
  main: {
    width: "80%",
    margin: "3% 10%"
  }
};

const Services = () => {
  return (
    <div>
      <div className="services">
        <h1>Our Services</h1>
        <Grid container spacing={5} style={styles.main}>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon icon={faLaptopCode} style={{ fontSize: 60 }} />
              <h1>Web Development</h1>
              <p>
                Want a website that defines the true essence of your business?
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon
                icon={faDraftingCompass}
                style={{ fontSize: 60 }}
              />
              <h1>Design</h1>
              <p>
                Logo, User Interface, Product, Fashion - We have got it all
                covered!
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon icon={faMobile} style={{ fontSize: 60 }} />
              <h1>App Development</h1>
              <p>
                Get your business on the fast-paced tech world by establishing
                your presence on the mobile!
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon icon={faMobile} style={{ fontSize: 60 }} />
              <h1>App Development</h1>
              <p>
                Get your business on the fast-paced tech world by establishing
                your presence on the mobile!
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon icon={faMobile} style={{ fontSize: 60 }} />
              <h1>App Development</h1>
              <p>
                Get your business on the fast-paced tech world by establishing
                your presence on the mobile!
              </p>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div className="each_service">
              <FontAwesomeIcon icon={faMobile} style={{ fontSize: 60 }} />
              <h1>App Development</h1>
              <p>
                Get your business on the fast-paced tech world by establishing
                your presence on the mobile!
              </p>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Services;
