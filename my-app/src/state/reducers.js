import { combineReducers } from "redux";
import { UPDATE_USER } from "../actions/user";

const user = (user = { user: "" }, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return { user: action.user };
    default:
      return user;
  }
};

export default combineReducers({ user });
