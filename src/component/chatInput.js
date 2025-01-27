import React, { Component } from "react";
import PropTypes from "prop-types";

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired
  };
  state = {
    message: ""
  };

  render() {
    return (
      <form
        action='.'
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmitMessage(this.state.message);
          this.setState({ message: "" });
        }}
      >
        <input
          type='text'
          placeholder={"Enter message..."}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          style={{
            width: "100%",
            background: "#e6e6f9",
            marginBottom: "1rem",
            borderRadius: "0.5rem",
            border: 0,
            padding: "1rem 0"
          }}
        />
      </form>
    );
  }
}

export default ChatInput;
