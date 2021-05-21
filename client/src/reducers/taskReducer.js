import _ from "lodash";

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {

    case "CREATE_TASK":
      return { ...state, [action.payload.id]: action.payload };

    case "MODIFY_TASK":
      return { ...state, [action.payload.id]: action.payload };

    case "FETCH_TASKS":
      return { ...state, ..._.mapKeys(action.payload, "id")};

    case "DELETE_TASK":
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
