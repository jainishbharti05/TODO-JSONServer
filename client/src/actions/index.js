import axios from "../apis/axios";
import history from "../history";

export const signIn = (userId, userName, givenName) => {
  return {
    type: "SIGN_IN",
    payload: { userId, userName, givenName}
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};

// TASK ACTION CREATER

export const createTask =
  (formValues, isCompleted) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await axios.post("/tasks", {
      ...formValues,
      isCompleted,
      userId,
    });

    dispatch({ type: "CREATE_TASK", payload: response.data });
    history.push('/tasks')
  };

export const fetchTasks = () => async (dispatch) => {
  const response = await axios.get("/tasks");

  dispatch({ type: "FETCH_TASKS", payload: response.data });
};

export const modifyTask = (formValues, id) => async (dispatch) => {
  const response = await axios.patch(`/tasks/${id}`, formValues);

  dispatch({ type: "MODIFY_TASK", payload: response.data });

};

export const deleteTask = (id) => async (dispatch) => {
  await axios.delete(`/tasks/${id}`);

  dispatch({ type: "DELETE_TASK", payload: id });
  history.push('/tasks')
};

// NOTES ACTION_CREATER

export const createNote = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await axios.post("/notes", { ...formValues, userId });

  dispatch({ type: "CREATE_NOTE", payload: response.data });
  history.push('/notes');
};

export const fetchNotes = () => async (dispatch) => {
  const response = await axios.get("/notes");

  dispatch({ type: "FETCH_NOTES", payload: response.data });

};

export const fetchNote = (id) => async (dispatch) => {
  const response = await axios.get(`/notes/${id}`);

  dispatch({ type: "FETCH_NOTE", payload: response.data });
};

export const modifyNote = (id, formValues) => async (dispatch) => {
  const response = await axios.patch(`/notes/${id}`, formValues);

  dispatch({ type: "MODIFY_NOTE", payload: response.data });
  history.push('/notes')
};

export const deleteNote = (id) => async (dispatch) => {
  await axios.delete(`/notes/${id}`);

  dispatch({ type: "DELETE_NOTE", payload: id });
  history.push("/notes")
};
