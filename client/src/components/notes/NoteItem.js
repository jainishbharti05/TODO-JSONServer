import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { deleteNote, fetchNotes } from "../../actions";

class NoteItem extends Component {
  deleteNote = (event) => {
    event.preventDefault();
    this.props.deleteNote(this.props.note.id);
    this.props.fetchNotes();
  };

  renderNote = () => {
    if (
      this.props.isSignedIn &&
      this.props.note.userId === this.props.currentUserId
    ) {
      return (
        <div className="card bg-light mb-3">
          <div className="card-body">
            <p className="card-text">{this.props.note.note}</p>
            <Link
              to={`/notes/modify/${this.props.note.id}`}
              className="btn btn-secondary mx-1"
            >
              Modify
            </Link>
            <Link
              onClick={this.deleteNote}
              to={`/notes/delete/${this.props.note.id}`}
              className="btn btn-danger mx-1"
            >
              Delete
            </Link>
          </div>
        </div>
      );
    }
  };

  render() {
    return <div>{this.renderNote()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
  };
};

export default connect(mapStateToProps, { deleteNote, fetchNotes })(NoteItem);
