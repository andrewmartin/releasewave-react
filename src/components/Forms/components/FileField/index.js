import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import cx from 'classnames';

export default class FileField extends Component {
  onDrop = acceptedFiles => {
    const { setFieldValue, name } = this.props;

    acceptedFiles.forEach(file => {
      const { name: filename } = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = evt => {
        setFieldValue(name, {
          filename,
          data: evt.target.result,
        });
      };
    });
  };

  render() {
    const { label, values, name } = this.props;

    return (
      <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <Dropzone onDrop={this.onDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => {
            return (
              <div
                {...getRootProps()}
                className={cx('dropzone', { 'dropzone--isActive': isDragActive })}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop files here...</p>
                ) : (
                  <p>Try dropping some files here, or click to select files to upload.</p>
                )}
              </div>
            );
          }}
        </Dropzone>
        {values[name] && values[name].data && <img src={values[name].data} alt="" />}
      </div>
    );
  }
}
