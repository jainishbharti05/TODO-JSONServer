import React from "react";

import { fetchTasks } from "../../actions";
import { connect } from "react-redux";
import TaskItem from "./TaskItem";
import SearchTask from "./SearchTask";

class TaskList extends React.Component {
  state = {
    filtered: [],
    term: "",
  };
  componentDidMount() {
    this.props.fetchTasks();
  }

  renderTasks() {
    if (this.state.filtered.length === 0 && this.state.term === "") {
      return this.props.tasks.map((task) => {
        return (
          <React.Fragment key={task.id}>
            <TaskItem task={task} />
          </React.Fragment>
        );
      });
    } else {
      return this.state.filtered.map((task) => {
        return (
          <React.Fragment key={task.id}>
            <TaskItem task={task} />
          </React.Fragment>
        );
      });
    }
  }

  onInputChange = (event) => {
    event.preventDefault();

    this.setState({
      filtered: this.props.tasks.filter((task) =>
        task.task.includes(event.target.value)
      ),
      term: event.target.value,
    });
  };

  render() {
    return (
      <div className="container-sm my-3 list-group">
        <SearchTask onInputChange={this.onInputChange} />
        {this.renderTasks()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tasks: Object.values(state.tasks),
  };
};

export default connect(mapStateToProps, { fetchTasks })(TaskList);
