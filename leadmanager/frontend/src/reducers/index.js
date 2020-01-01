import { combineReducers } from "redux";
import leads from "./leads.js";
import errors from "./errors.js";
import messages from "./messages.js";

export default combineReducers({
  leads,
  errors,
  messages
});
