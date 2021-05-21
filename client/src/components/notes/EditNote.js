import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import NoteForm from "./NoteForm";
import { fetchNote, modifyNote } from "../../actions";

class EditNote extends React.Component {
  componentDidMount() {
    this.props.fetchNote(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    this.props.modifyNote(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.note) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <NoteForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.note, "note")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    note: state.notes[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchNote, modifyNote })(EditNote);
