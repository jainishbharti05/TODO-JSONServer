import React, { Component } from "react";
import FetchButtons from "./FetchButtons";
import CreateNote from "./notes/CreateNote";
import CreateTask from "./tasks/CreateTask";
import User from './User';

class AppHome extends Component {
  render() {
    return (
      <div>
        <User />
        <CreateNote />
        <div className="container-sm my-4">
          <h4>Add your Tasks here</h4>
        </div>
        <CreateTask />
        <FetchButtons />
      </div>
    );
  }
}

export default AppHome;
