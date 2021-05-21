import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchNotes } from "../../actions";
import NoteItem from "./NoteItem";
import SearchNote from "./SearchNote";

class NotesList extends React.Component {
  state = {
    filtered: [],
    term: "",
  };
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderNotes() {
    if (this.state.filtered.length === 0 && this.state.term === "") {
      return this.props.notes.map((note) => {
        return (
          <React.Fragment key={note.id}>
            <NoteItem note={note} />
          </React.Fragment>
        );
      });
    } else {
      return this.state.filtered.map((note) => {
        return (
          <React.Fragment key={note.id}>
            <NoteItem note={note} />
          </React.Fragment>
        );
      });
    }
  }

  renderButton() {
    return (
      <div>
        <Link to="/notes/new" className="btn btn-outline-secondary">
          Create Note
        </Link>
      </div>
    );
  }

  onInputChange = (event) => {
    event.preventDefault();

    this.setState({
      filtered: this.props.notes.filter((note) =>
        note.note.includes(event.target.value)
      ),
      term: event.target.value,
    });
  };

  render() {
    return (
      <div className="container-sm my-4">
        <SearchNote onInputChange={this.onInputChange} />
        {this.renderNotes()}
        {this.renderButton()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: Object.values(state.notes)
  };
};

export default connect(mapStateToProps, { fetchNotes })(NotesList);
