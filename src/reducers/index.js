import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import mainFormReducer from "./mainForm";

export default combineReducers({
  routing: routerReducer,
  mainForm: mainFormReducer
});
