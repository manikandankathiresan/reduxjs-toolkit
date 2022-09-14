import { combineReducers } from "redux";
import { authReducer } from "../reducer/auth";
import { counterReducer } from "../reducer/counter/counter-reducer";
import { usersReducer } from "../reducer/users";

const rootReducer = combineReducers({
  login: authReducer,
  counter: counterReducer,
  user: usersReducer,
});

export { rootReducer };
