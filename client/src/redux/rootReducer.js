import userReducer from "./reducers/userReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
