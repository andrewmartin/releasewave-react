import React, { Component } from 'react';

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import toolbar from './toolbar';

import changeCase from 'change-case';

export default class RichTextField extends Component {
  constructor(props) {
    super(props);
    const html = props.initialValues[props.name] || '<p>Enter a great review here 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { editorHtml } = this.state;
    const { setFieldValue, name } = this.props;

    if (prevState.editorHtml !== editorHtml) {
      setFieldValue(name, editorHtml);
    }
  }

  onChange = editorState => {
    this.setState({
      editorState,
      editorHtml: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  render() {
    const { editorState } = this.state;
    const { name, errors } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{changeCase.titleCase(name)}</label>
        <div className="editor">
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={this.onChange}
            toolbar={toolbar}
          />
        </div>
        {errors[name] && <div className="form-feedback">{errors[name]}</div>}
      </div>
    );
  }
}
