import React, { Component } from "react";
import { Link } from "react-router-dom";
import { hoverProject } from "../actions/index.js";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ hoveredProject: hoverProject }, dispatch);
// }
class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      prjctname: ""
    };
  }

  onHover = e => {
    console.log("hover");
    localStorage.setItem("project", e.target.id);
    // console.log(e.target.id);
    this.setState({
      hover: true
    });
  };
  unHover = () => {
    this.setState({
      hover: false
    });
  };

  render() {
    return (
      <div
        id={this.props.project}
        style={{
          margin: "2vh 0",
          width: "95%",
          marginLeft: "2.5%",
          backgroundColor: "gainsboro",
          backgroundImage: this.state.hover
            ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            : "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          borderRadius: "0.4rem"
        }}
        onMouseEnter={this.onHover}
        onMouseLeave={this.unHover}
      >
        <Link
          className='aTag'
          to={{
            pathname: "projectdetails"
            //   state: {
            //     project: { this.props }
            //   }
          }}
          style={{ textDecoration: "none" }}
        >
          <p className='pTag'>{this.props.project}</p>
        </Link>

        <p>{this.props.name}</p>
        <p>{this.props.deadline}</p>
      </div>
    );
  }
}

export default Projects;
