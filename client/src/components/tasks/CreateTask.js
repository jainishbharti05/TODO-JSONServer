import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createTask, fetchTasks } from "../../actions";

class CreateTask extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className="invalid-feedback">{error}</div>;
    }
  }
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderInput = ({ input, meta }) => {
    const className = `form-control ${
      meta.error && meta.touched ? " is-invalid" : ""
    }`;
    return (
      <div className="input-group">
        <input className={className} {...input} />
        {this.renderError(meta)}
        <button className="btn btn-outline-secondary">Add Task</button>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.createTask(formValues, false);
    formValues.task = "";
  };

  render() {
    return (
      <form className="container-sm my-4" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="task" component={this.renderInput} />
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.task) {
    errors.task = "You must enter a task";
  }
  return errors;
};

const wrappedIn = reduxForm({
  form: "taskForm",
  validate,
})(CreateTask);

export default connect(null, { createTask, fetchTasks })(wrappedIn);
