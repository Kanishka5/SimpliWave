import React from "react";
import {
  EditorState,
  RichUtils,
  DefaultDraftBlockRenderMap,
  Decorator,
  convertFromRaw
} from "draft-js";
import Editor from "draft-js-plugins-editor";
import CodeUtils from "draft-js-code";
import "../staticfiles/css/editor.css";
import Prism from "prismjs";
// import createPrismPlugin from "draft-js-prism-plugin";
import "prismjs/themes/prism-coy.css";
import "draft-js/dist/Draft.css";
import PrismDraftDecorator from "draft-js-prism";
import Immutable from "immutable";

const { Map, List } = Immutable;

export default class TxtEditor extends React.Component {
  constructor(props) {
    super(props);
    // const prismPlugin = createPrismPlugin({
    //   // It's required to provide your own instance of Prism
    //   prism: Prism
    // });
    // const decorator = new PrismDraftDecorator();

    var decorator = new PrismDraftDecorator();
    var contentState = convertFromRaw({
      entityMap: {},
      blocks: [
        {
          type: "code-block",
          text: 'var message = "This is awesome!";'
        },
        {
          type: "unstyled",
          text: "Type some JavaScript below:"
        },
        {
          type: "code-block",
          text: 'var message = "This is awesome!";'
        }
      ]
    });

    this.state = {
      editorState: EditorState.createWithContent(contentState, decorator)
    };

    this.focus = () => this.refs.editor.focus();
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = command => this._handleKeyCommand(command);
    this.toggleBlockType = type => this._toggleBlockType(type);
    this.toggleInlineStyle = style => this._toggleInlineStyle(style);
  }

  _handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  onTab = e => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState)) return "not-handled";

    this.onChange(CodeUtils.onTab(e, editorState));
    return "handled";
  };

  handleReturn = e => {
    const { editorState } = this.state;
    if (!CodeUtils.hasSelectionInBlock(editorState)) return "not-handled";

    this.onChange(CodeUtils.handleReturn(e, editorState));
    return "handled";
  };

  handleChange(editorState) {
    this.setState({ editorState });
  }

  componentDidMount() {
    this.handleChange(
      RichUtils.toggleBlockType(this.state.editorState, "code-block")
    );
  }

  render() {
    const { editorState } = this.state;

    let className = "RichEditor-editor";
    var contentState = editorState.getCurrentContent();
    if (!contentState.hasText()) {
      if (
        contentState
          .getBlockMap()
          .first()
          .getType() !== "unstyled"
      ) {
        className += " RichEditor-hidePlaceholder";
      }
    }

    return (
      <div className='RichEditor-root'>
        <div className={className} onClick={this.focus}>
          <Editor
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            ref='editor'
            handleReturn={this.handleReturn}
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2
  }
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}
