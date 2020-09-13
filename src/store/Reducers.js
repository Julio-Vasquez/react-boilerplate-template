import { combineReducers } from "redux";
import reducerAuth, {
  INITIAL_STATE as initialAuth,
} from "./../services/auth/reducer";

const appReducer = combineReducers({
  Auth: reducerAuth,
});

const rootReducer = (state, action) => {
  if (action.type === "AUTH/LOGOUT")
    state = {
      Auth: initialAuth,
    };
  return appReducer(state, action);
};

export default rootReducer;
