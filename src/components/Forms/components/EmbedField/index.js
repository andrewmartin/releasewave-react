import React, { Component } from 'react';

export default class TextField extends Component {
  onChange = (index, e) => {
    const { setFieldValue, values, name } = this.props;
    const {
      target: { value },
    } = e;

    const embeds = values[name];
    embeds[index] = value;
    setFieldValue(name, embeds);
  };

  render() {
    const { placeholder, setFieldValue, label, name, values } = this.props;
    return (
      <div className="form-group">
        <label className="field-label">{label}</label>
        {values[name].map((embed, index) => (
          <div className="form-group" key={index}>
            <textarea
              placeholder={placeholder}
              onChange={this.onChange.bind(this, index)}
              className="form-control"
              rows="2"
              defaultValue={embed}
            />
          </div>
        ))}
        <div className="form-group">
          <button
            className="btn btn-sm btn-primary"
            onClick={e => {
              setFieldValue(name, values[name].concat(''));
              e.preventDefault();
            }}>
            Add
          </button>
          {!!values[name].length && (
            <button
              className="btn btn-sm btn-danger"
              onClick={e => {
                e.preventDefault();
                setFieldValue(name, []);
              }}>
              Remove All
            </button>
          )}
        </div>
      </div>
    );
  }
}
