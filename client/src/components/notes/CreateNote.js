import React from "react";
import { connect } from "react-redux";

import { createNote } from "../../actions";
import NoteForm from "./NoteForm";

class CreateNote extends React.Component {
  onSubmit = (formValues) => {
    this.props.createNote(formValues);
    formValues.note = "";
  };

  render() {
    return (
      <div>
        <NoteForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, { createNote })(CreateNote);
