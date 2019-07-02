import React from "react";
import avatar from "../assets/image/about_1.jpg";

const Avatar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5vh 0"
      }}
    >
      <img
        src={avatar}
        style={{ borderRadius: "50%", width: "8vw", height: "8vw" }}
      />
      <p
        style={{
          color: "rgb(246, 246, 249)",
          fontSize: "1.2rem",
          letterSpacing: 0.3
        }}
      >
        Lorem Ipsum
      </p>
    </div>
  );
};

export default Avatar;
