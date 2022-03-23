import { UPDATE_USERNAME } from "@actions/users";
import { UPDATE_USERNAME } from "../actions/users";

const user = (user = { username: "" }, action) => {
  switch (action.type) {
    case UPDATE_USERNAME:
      return { username: action.username };
    default:
      return user;
  }
};

export default combineReducers({ user });
