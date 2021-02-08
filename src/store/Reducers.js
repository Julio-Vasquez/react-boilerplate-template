import { combineReducers } from "redux";

import 
  reducerAuth, 
  { initialState as initialAuth} 
from './../services/auth/authSlice'

const appReducer = combineReducers({
  Auth: reducerAuth,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout")
    state = {
      Auth: initialAuth,
    };
  return appReducer(state, action);
};

export default rootReducer;
