import _ from "lodash";
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_NOTES":
      return { ...state, ..._.mapKeys(action.payload, "id") };

    case "CREATE_NOTE":
      return { ...state, [action.payload.id]: action.payload };

    case "FETCH_NOTE":
      return { ...state, [action.payload.id]: action.payload };

    case "MODIFY_NOTE":
      return { ...state, [action.payload.id]: action.payload };

    case "DELETE_NOTE":
      return _.omit(state, action.payload);
      
    default:
      return state;
  }
};
