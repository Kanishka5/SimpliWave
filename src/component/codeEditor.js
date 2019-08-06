import React, { Component } from "react";
import Editor from "draft-js-plugins-editor";
import createCodeEditorPlugin from "draft-js-code-editor-plugin";
import {
  EditorState,
  RichUtils,
  convertToRaw,
  convertFromRaw,
  SelectionState
} from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import Prism from "prismjs";
// import PrismDecorator from "draft-js-prism";
import createPrismPlugin from "draft-js-prism-plugin";
import "../staticfiles/css/editor.css";
import "prismjs/themes/prism.css";
import CreateMarkdownShortcutsPlugin from "draft-js-markdown-shortcuts-plugin";
import axios from "axios";
import Pusher from "pusher-js";
import Helmet from "react-helmet";
import Sidebar from "./sidebar";

const plugins = [
  createCodeEditorPlugin(),
  CreateMarkdownShortcutsPlugin(),
  createPrismPlugin({
    prism: Prism
  })
];

export default class TxtEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      text: ""
    };
    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => {
      // onChange, update editor state then notify pusher of the new editorState
      this.setState({ editorState }, () => {
        // call the function to notify Pusher of the new editor state
        this.notifyPusher(
          stateToHTML(this.state.editorState.getCurrentContent())
        );
        this.notifyPusherEditor(this.state.editorState);
      });
    };
    this.notifyPusher = this._notifyPusher.bind(this);
    this.notifyPusherEditor = this._notifyPusherEditor.bind(this);
  }

  getBlockStyle = block => {
    switch (block.getType()) {
      case "code-block":
        return "language-javascript";
      default:
        return null;
    }
  };

  componentDidMount() {
    this.onChange(
      RichUtils.toggleBlockType(this.state.editorState, "code-block")
    );
    let self = this;
    // listen to 'text-update' events
    this.channel.bind("text-update", function(data) {
      // update the text state with new data
      self.setState({ text: data.text });
    });
    // listen to 'editor-update' events
    this.channel.bind("editor-update", function(data) {
      // create a new selection state from new data
      let newSelection = new SelectionState({
        anchorKey: data.selection.anchorKey,
        anchorOffset: data.selection.anchorOffset,
        focusKey: data.selection.focusKey,
        focusOffset: data.selection.focusOffset
      });
      // create new editor state
      let editorState = EditorState.createWithContent(
        convertFromRaw(data.text)
      );
      const newEditorState = EditorState.forceSelection(
        editorState,
        newSelection
      );
      // update the RichEditor's state with the newEditorState
      self.setState({ editorState: newEditorState });
    });
  }

  componentWillMount() {
    this.pusher = new Pusher("103e9a6911828e3599ae", {
      cluster: "ap2",
      encrypted: true
    });
    this.channel = this.pusher.subscribe("editor");
  }

  _notifyPusher(text) {
    axios.post("http://localhost:8000/ide/save-txt/", { txt: text });
  }

  _notifyPusherEditor(editorState) {
    const selection = editorState.getSelection();
    let text = convertToRaw(editorState.getCurrentContent());

    axios.post("http://localhost:8000/ide/editor-txt/", { text, selection });
  }

  render() {
    return (
      <div>
        <Sidebar />
        <div style={styles.box}>
          <div style={styles.projects}>
            <p style={{ textAlign: "center", background: "white" }}>project1</p>
          </div>
          <div style={styles.editor}>
            <Helmet
              title='ide'
              meta={[
                { name: "description", content: "Sample" },
                { name: "keywords", content: "sample, something" },
                { name: "charset", content: "utf-8" }
              ]}
            />
            <Editor
              editorState={this.state.editorState}
              onChange={this.onChange}
              plugins={plugins}
              blockStyleFn={this.getBlockStyle}
              ref='editor'
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  editor: {
    backgroundColor: "rgb(245, 242, 240)",
    width: "70vw",
    marginTop: 0,
    position: "absolute",
    left: "10vw",
    top: "3vh",
    minHeight: "85vh"
  },
  box: {
    display: "flex",
    width: "80vw",
    position: "relative",
    left: "15vw",
    top: "5vh"
  },
  projects: {
    width: "10vw",
    height: "85vh",
    background: "#3e419c",
    marginTop: "3vh"
  }
};
