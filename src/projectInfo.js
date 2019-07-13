import React, { Component } from "react";
import Navbar from "./component/navbar";
import Sidebar from "./component/sidebar";
import EachProject from "./component/detailsProj";
import GraphDtl from "./component/graphDtl";

class ProjectInfo extends Component {
  //   componentDidMount() {
  //     const { handle } = this.props.match.params;

  //     fetch(`http://127.0.0.1:8000/client/project/`).then(project => {
  //       this.setState(() => ({ project }));
  //     });
  //   }
  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <EachProject />
        <GraphDtl />
      </div>
    );
  }
}

export default ProjectInfo;
