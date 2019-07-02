import React from "react";
import "../staticfiles/css/sidebar.css";
import Avatar from "./avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Avatar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <p style={{ color: "#f6f6f9" }}>
          Projects{" "}
          <FontAwesomeIcon
            icon={faArrowDown}
            style={{ fontSize: "1rem", color: "#fb3a71" }}
          />
        </p>
        <p style={{ color: "#f6f6f9" }}>Project1</p>
        <p style={{ color: "#f6f6f9" }}>Project2</p>
      </div>
    </div>
  );
};

export default Sidebar;
