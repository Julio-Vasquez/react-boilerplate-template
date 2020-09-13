import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "./Sagas";
import rootReducers from "./Reducers";

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];
 
if ("development" === "development") middleware = [...middleware, logger];

export const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);
