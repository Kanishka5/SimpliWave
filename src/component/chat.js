import React, { Component } from "react";
import ChatInput from "./chatInput";
import ChatMessage from "./chatMsg";
import Sidebar from "./sidebar";
import Navbar from "./navbar";
import axios from "axios";

const breakpoints = {
  desktop: 1040,
  tablet: 840,
  mobile: 540
};

const host = process.env.REACT_APP_HOST;
const user = JSON.parse(localStorage.getItem("userinfo"));

class Chat extends Component {
  state = {
    name: "kanishkan14@gmail.com",
    messages: [],
    projname: "Project2_0"
  };

  ws = new WebSocket(`ws://${host}/ws/chat/${this.state.projname}/`);

  componentDidMount() {
    const URL = `ws://${host}/ws/chat/${this.state.projname}/`;
    axios
      .get(
        `${host}/employee/project-manage/?${localStorage.getItem("type")}id=${
          user.id
        }`
      )
      .then(json => {
        console.log(json);
        this.setState({
          projname: json.data[0].name
        });
        console.log(json.data[0].name);
      });
    this.scrollToBottom();
    // this.ws.onopen = () => {
    //   console.log("connected");
    // };

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      this.setState({
        ws: new WebSocket(`ws://${host}/ws/chat/${this.state.projname}/`)
      });
    };
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  addMessage = message => {
    this.setState(state => ({ messages: [message, ...state.messages] }));
  };

  submitMessage = messageString => {
    const message = { sender: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
  };

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div>
        <Navbar name='Dashboard' />
        <Sidebar />
        <div className='chat' style={styles.chat}>
          <h2
            style={{
              textAlign:
                window.innerWidth > breakpoints.tablet ? "auto" : "center"
            }}
          >
            CHATS:{" "}
          </h2>
          <div className='msgWindow' style={styles.holder}>
            <div style={styles.chatList}>
              <p style={styles.txt}>{this.state.projname}</p>
            </div>
            <div className='chats' style={styles.chatbox}>
              {" "}
              <div style={styles.msg}>
                {this.state.messages.reverse().map((message, index) => (
                  <ChatMessage
                    key={index}
                    message={message.message}
                    name={message.sender}
                  />
                ))}
                <div
                  style={{ float: "left", clear: "both" }}
                  ref={el => {
                    this.messagesEnd = el;
                  }}
                />
              </div>
              <ChatInput
                ws={this.ws}
                onSubmitMessage={messageString =>
                  this.submitMessage(messageString)
                }
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;

const styles = {
  chat: {
    marginLeft: window.innerHeight > breakpoints.tablet ? "27vw" : "5vw",
    paddingTop: "5vh",
    marginRight: window.innerHeight > breakpoints.tablet ? "14vw" : "5vw",
    borderRadius: 5
  },
  holder: {
    background: "white",
    display: "flex",
    height: "80vh",
    boxShadow: "-3px 4px 12px 1px #7968b3"
  },
  chatList: {
    width: "16%",
    // background: "#3e419c"
    backgroundImage:
      "linear-gradient(to left top, #f08d85, #f2837a, #f3796f, #f46e63, #f56358)"
  },
  chatbox: {
    padding: "0 2vw",
    width: "84%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end"
  },
  txt: {
    textAlign: "center",
    backgroundColor: "white",
    padding: "1vh"
  },
  msg: {
    overflowY: "scroll",
    margin: "2vh 0",
    background: "#e6e6f9",
    borderRadius: "0.5rem"
  }
};
