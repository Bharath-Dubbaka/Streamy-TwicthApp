import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends Component {

  renderInput = (formProps) => {
    // console.log(formProps);
    return (
      <div className="field">
        <label>{formProps.label}</label>
        <input
          {...formProps.input}
          // onChange={formProps.input.onChange}
          // value={formProps.input.value}
        />
      </div>
    );
  };

  onSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    console.log(this.props);
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Description"
        />
      </form>
    );
  }
}

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
