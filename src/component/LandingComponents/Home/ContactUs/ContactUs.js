import React from "react";
import "./ContactUs.css";
import Button from "@material-ui/core/Button";

const ContactUs = props => (
  <div className={"ContactUs"}>
    <p style={{ color: "black", fontSize: "xx-large", fontWeight: "bold" }}>
      Get started with SimpliWave
    </p>
    {/* <Button variant="outlined" color="primary" onClick={props.clicked}>
            Contact Us
        </Button> */}
  </div>
);

export default ContactUs;
