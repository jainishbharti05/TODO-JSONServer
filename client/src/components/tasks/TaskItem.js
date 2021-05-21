import React from "react";
import {
  ListItemSecondaryAction,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { connect } from "react-redux";

import { deleteTask, modifyTask } from "../../actions";

const TaskItem = (props) => {
  const { task, deleteTask, modifyTask, currentUserId, isSignedIn } = props
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const onDeleteTask = (event) => {
    event.preventDefault();
    const id = task.id;
    deleteTask(id);
  };

  const onCompletedTask = (event) => {
    event.preventDefault();
    const formValues = {
      isCompleted: true,
    };
    modifyTask(formValues, task.id);
  };

  const onUncheckTask = (event) => {
    event.preventDefault();
    const formValues = {
      isCompleted: false,
    };
    modifyTask(formValues, task.id);
  };

  const renderList = () => {
    if (isSignedIn && task.userId === currentUserId) {
      return (
        <form className="list-group-item">
        {!task.isCompleted ? (
          <>
            <input
              className="mx-2"
              type="checkbox"
              onChange={onCompletedTask}
            />
            <span>{task.task}</span>
          </>
        ) : (
          <>
            <input
              className="mx-2"
              type="checkbox"
              checked
              onChange={onUncheckTask}
            />
            <span className="text-decoration-line-through">{task.task}</span>
          </>
        )}
        <ListItemSecondaryAction>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <ChevronRightIcon />
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={onDeleteTask}>Delete</MenuItem>
            <MenuItem onClick={onCompletedTask}>Mark Completed</MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </form>
      )
    }
  }

  return (
    <div>
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { deleteTask, modifyTask })(TaskItem);
