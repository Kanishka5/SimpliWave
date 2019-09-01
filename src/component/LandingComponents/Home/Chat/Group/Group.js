import React from "react";
import "./Group.css";
import User from "./User/User";
import ring from "../../../../../assets/image/4.png";

const Group = props => {
  return (
    <div className={"Group"}>
      <img className={"Direction"} src={ring} alt={"Direction"} />
      <div className={"Student"}>
        <User color={"yellow"}>Student</User>
      </div>
      <div className={"Client"}>
        <User color={"orange"}>Client</User>
      </div>
      <div className={"Employee"}>
        <User color={"blue"}>Employee</User>
      </div>
    </div>
  );
};

export default Group;
