import React, { Component } from "react";
import ChatInput from "./chatInput";
import ChatMessage from "./chatMsg";
import Sidebar from "./sidebar";

const URL = "ws://localhost:8000/ws/chat/prj1/";

class Chat extends Component {
  state = {
    name: "kanishkan14@gmail.com",
    messages: []
  };

  ws = new WebSocket(URL);

  componentDidMount() {
    this.ws.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log("connected");
    };

    this.ws.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data);
      this.addMessage(message);
    };

    this.ws.onclose = () => {
      console.log("disconnected");
      // automatically try to reconnect on connection loss
      this.setState({
        ws: new WebSocket(URL)
      });
    };
  }

  addMessage = message => {
    this.setState(state => ({ messages: [message, ...state.messages] }));
    window.scrollTo(0, document.body.chats.scrollHeight);
  };

  submitMessage = messageString => {
    // on submitting the ChatInput form, send the message, add it to the list and reset the input
    const message = { sender: this.state.name, message: messageString };
    this.ws.send(JSON.stringify(message));
    // this.addMessage(message);
  };

  render() {
    return (
      <div>
        <Sidebar />
        <div className='chat' style={styles.chat}>
          <h2>CHATS: </h2>
          <div className='msgWindow' style={styles.holder}>
            <div style={styles.chatList}>
              <p style={styles.txt}>chat1</p>
              <p style={{ textAlign: "center" }}>chat2</p>
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
    marginLeft: "14vw",
    paddingTop: "5vh",
    marginRight: "14vw",
    borderRadius: 5
  },
  holder: {
    background: "white",
    display: "flex",
    height: "80vh"
  },
  chatList: {
    width: "16%",
    background: "#3e419c"
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
    overflowY: "scroll"
  }
};
