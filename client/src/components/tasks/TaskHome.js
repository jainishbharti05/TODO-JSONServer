import React, { Component } from "react";

import TaskList from "./TaskList";
import CreateTask from "./CreateTask";

class TaskHome extends Component {

  render() {
    return (
      <div className="container-sm my-4">
        <h4 className="text-muted text-left">Todos for Today</h4>
        <TaskList/>
        <CreateTask/>
      </div>
    );
  }
}

export default TaskHome;
