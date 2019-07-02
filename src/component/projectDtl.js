import React from "react";
import { Link } from "react-router-dom";

const Projects = props => {
  return (
    <div
      style={{
        margin: "2vh 0",
        width: "95%",
        marginLeft: "2.5%",
        backgroundColor: "gainsboro",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around"
      }}
    >
      <Link
        to={{
          pathname: "projectdetail",
          state: {
            project: { props }
          }
        }}
      >
        <p>{props.project}</p>
      </Link>

      <p>{props.name}</p>
      <p>{props.deadline}</p>
    </div>
  );
};

export default Projects;
