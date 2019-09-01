import React, { Component } from "react";
import Axios from "axios";
import Zoom from "react-reveal/Zoom";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

const host = process.env.REACT_APP_HOST;

class ProjectProg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project_: new Array(),
      project_Id: new Array(),
      completed: new Array(),
      backlog: new Array(),
      inProg: new Array(),
      review: new Array(),
      input: "",
      input2: "",
      input3: "",
      input4: "",
      currId: ""
    };
  }
  componentDidMount() {
    Axios.get(`${host}/employee/project-manage`).then(json => {
      const projects = json.data;
      console.log(json);
      projects.map(project => {
        this.setState({
          project_: [...this.state.project_, project.name],
          project_Id: [...this.state.project_Id, project.id]
        });
      });
    });
  }

  details = e => {
    this.setState({
      currId: e.target.id
    });
    //completed
    axios
      .get(
        `${host}/employee/project-manage/${
          e.target.id
        }/milestone/?prog=Completed`
      )
      .then(json => {
        const projects = json.data;
        console.log(json);
        projects.map(project => {
          this.setState({
            completed: [...this.state.completed, project.topic]
          });
        });
      });

    //backlog
    axios
      .get(
        `${host}/employee/project-manage/${e.target.id}/milestone/?prog=Backlog`
      )
      .then(json => {
        const projects = json.data;
        console.log(json);
        projects.map(project => {
          this.setState({
            backlog: [...this.state.backlog, project.topic]
          });
        });
      });

    //in progress
    axios
      .get(
        `${host}/employee/project-manage/${
          e.target.id
        }/milestone/?prog=In-Progress`
      )
      .then(json => {
        const projects = json.data;
        console.log(json);
        projects.map(project => {
          this.setState({
            inProg: [...this.state.inProg, project.topic]
          });
        });
      });

    //ready for review
    axios
      .get(
        `${host}/employee/project-manage/${
          e.target.id
        }/milestone/?prog=Ready for Review`
      )
      .then(json => {
        const projects = json.data;
        console.log(json);
        projects.map(project => {
          this.setState({
            review: [...this.state.review, project.topic]
          });
        });
      });

    this.setState({
      show: true
    });
  };

  addBacklog = data => {
    axios.post(
      `${host}/employee/project-manage/${this.state.currId}/milestone/`,
      {
        topic: data,
        progress: "Backlog"
      }
    );
    this.setState({
      backlog: [...this.state.backlog, data]
    });
  };

  addInProg = data => {
    axios.post(
      `${host}/employee/project-manage/${this.state.currId}/milestone/`,
      {
        topic: data,
        progress: "In-Progress"
      }
    );
    this.setState({
      inProg: [...this.state.inProg, data]
    });
  };

  addReview = data => {
    axios.post(
      `${host}/employee/project-manage/${this.state.currId}/milestone/`,
      {
        topic: data,
        progress: "Ready for Review"
      }
    );
    this.setState({
      review: [...this.state.review, data]
    });
  };

  addCompleted = data => {
    axios.post(
      `${host}/employee/project-manage/${this.state.currId}/milestone/`,
      {
        topic: data,
        progress: "Completed"
      }
    );
    this.setState({
      completed: [...this.state.completed, data]
    });
  };

  keyPress = prog => e => {
    if (e.keyCode == 13) {
      if (prog === "backlog") {
        this.addBacklog(e.target.value);
      } else if (prog === "inProg") {
        this.addInProg(e.target.value);
      } else if (prog === "review") {
        this.addReview(e.target.value);
      } else {
        this.addCompleted(e.target.value);
      }
      this.setState({
        input: "",
        input2: "",
        input3: "",
        input4: ""
      });
    }
  };

  moveToInProg = e => {
    console.log(e.target.id);
    for (var i = 0; i < this.state.backlog.length; i++) {
      if (this.state.backlog[i] === e.target.id) {
        // this.setState({
        //   backlog: this.state.backlog.splice(i, 1)
        // });
        this.state.backlog.splice(i, 1);
        i--;
      }
    }
    this.setState({
      inProg: [...this.state.inProg, e.target.id]
    });
  };

  render() {
    const handleChange = name => event => {
      this.setState({
        [name]: event.target.value
      });
    };

    let children = [];
    let len = this.state.project_.length;
    for (let i = 0; i < len; i++) {
      children.push(
        <div
          id={this.state.project_Id[i]}
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onClick={this.details}
        >
          <p className='pTag'>{this.state.project_[i]}</p>
          <p>Show Progress</p>
        </div>
      );
    }

    //backlog
    let progress1 = [];
    let len2 = this.state.backlog.length;
    for (let i = 0; i < len2; i++) {
      progress1.push(
        <div
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onClick={this.details}
        >
          <p className='pTag'>{this.state.backlog[i]}</p>
          <p id={this.state.backlog[i]} onClick={this.moveToInProg}>
            ->
          </p>
        </div>
      );
    }

    //in progress
    let progress2 = [];
    let len3 = this.state.inProg.length;
    for (let i = 0; i < len3; i++) {
      progress2.push(
        <div
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onClick={this.details}
        >
          <p className='pTag'>{this.state.inProg[i]}</p>
          <p id={this.state.backlog[i]} onClick={this.moveToInProg}>
            ->
          </p>
        </div>
      );
    }

    //ready for reviw
    let progress3 = [];
    let len4 = this.state.review.length;
    for (let i = 0; i < len4; i++) {
      progress3.push(
        <div
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onClick={this.details}
        >
          <p className='pTag'>{this.state.review[i]}</p>
          <p id={this.state.backlog[i]} onClick={this.moveToInProg}>
            ->
          </p>
        </div>
      );
    }

    //completed
    let progress4 = [];
    let len5 = this.state.completed.length;
    for (let i = 0; i < len5; i++) {
      progress4.push(
        <div
          style={{
            margin: "2vh 0",
            width: "95%",
            marginLeft: "2.5%",
            backgroundColor: "gainsboro",
            // backgroundImage: this.state.hover
            //   ? "linear-gradient(to left top, #ffecc3, #ffe5ab, #ffdd94, #ffd57c, #ffcd64)"
            //   : "none",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            borderRadius: "0.4rem"
          }}
          onClick={this.details}
        >
          <p className='pTag'>{this.state.completed[i]}</p>
          <p id={this.state.backlog[i]} onClick={this.moveToInProg}>
            ->
          </p>
        </div>
      );
    }

    if (this.state.show) {
      return (
        <div style={styles.box}>
          {/* backlog */}
          <div style={{ ...styles.eachBox, marginTop: "10vh" }}>
            <h1 style={{ marginBottom: "5vh", color: "black" }}>Backlog</h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "53vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  {progress1}
                  <TextField
                    id='outlined-multiline-flexible'
                    label='Add new'
                    multiline
                    rowsMax='4'
                    value={this.state.input}
                    onChange={handleChange("input")}
                    margin='normal'
                    variant='outlined'
                    onKeyDown={this.keyPress("backlog")}
                  />
                </div>
              </div>
            </Zoom>
          </div>

          {/* in progress */}
          <div style={{ ...styles.eachBox, marginTop: "10vh" }}>
            <h1 style={{ marginBottom: "5vh", color: "black" }}>In Progress</h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "53vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  {progress2}
                  <TextField
                    id='outlined-multiline-flexible'
                    label='Add new'
                    multiline
                    rowsMax='4'
                    value={this.state.input2}
                    onChange={handleChange("input2")}
                    margin='normal'
                    variant='outlined'
                    onKeyDown={this.keyPress("inProg")}
                  />
                </div>
              </div>
            </Zoom>
          </div>

          {/* ready for review */}
          <div style={{ ...styles.eachBox, marginTop: "10vh" }}>
            <h1 style={{ marginBottom: "5vh", color: "black" }}>
              Ready for Review
            </h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "53vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  {progress3}
                  <TextField
                    id='outlined-multiline-flexible'
                    label='Add new'
                    multiline
                    rowsMax='4'
                    value={this.state.input3}
                    onChange={handleChange("input3")}
                    margin='normal'
                    variant='outlined'
                    onKeyDown={this.keyPress("review")}
                  />
                </div>
              </div>
            </Zoom>
          </div>

          {/* completed */}
          <div style={{ ...styles.eachBox, marginTop: "10vh" }}>
            <h1 style={{ marginBottom: "5vh", color: "black" }}>Completed</h1>
            <Zoom bootom>
              <div style={{ display: "flex" }}>
                <div
                  style={{
                    width: "53vw",
                    borderRadius: 7,
                    //   overflow: "hidden",
                    background: "#f6f6f9",
                    boxShadow: "-1px 5px 9px 1px #3e419c59",
                    paddingTop: "6vh",
                    position: "relative"
                  }}
                >
                  {progress4}
                  <TextField
                    id='outlined-multiline-flexible'
                    label='Add new'
                    multiline
                    rowsMax='4'
                    value={this.state.input4}
                    onChange={handleChange("input4")}
                    margin='normal'
                    variant='outlined'
                    onKeyDown={this.keyPress("completed")}
                  />
                </div>
              </div>
            </Zoom>
          </div>
        </div>
      );
    } else
      return (
        <div
          style={{
            marginLeft: "15vw",
            marginTop: "10vh",
            marginBottom: "10vh"
          }}
        >
          <h1 style={{ marginBottom: "5vh", color: "black" }}>
            Project Progress
          </h1>
          <Zoom bootom>
            <div style={{ display: "flex" }}>
              <div
                style={{
                  width: "53vw",
                  borderRadius: 7,
                  //   overflow: "hidden",
                  background: "#f6f6f9",
                  boxShadow: "-1px 5px 9px 1px #3e419c59",
                  paddingTop: "6vh",
                  position: "relative"
                }}
              >
                {children}
              </div>
            </div>
          </Zoom>
        </div>
      );
  }
}

export default ProjectProg;

const styles = {
  box: {
    display: "flex",
    justifyContent: "space-around"
  },
  eachBox: {
    width: "20vw",
    marginLeft: 0
  }
};
