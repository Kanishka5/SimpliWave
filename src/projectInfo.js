import React, { Component } from "react";

class ProjectInfo extends Component {
  componentDidMount() {
    const { handle } = this.props.match.params;

    fetch(`http://127.0.0.1:8000/client/project/`).then(project => {
      this.setState(() => ({ project }));
    });
  }
  render() {
    return (
      <div>
        <h1>dasf</h1>
      </div>
    );
  }
}

export default ProjectInfo;
