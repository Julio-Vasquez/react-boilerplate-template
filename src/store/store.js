import { configureStore } from '@reduxjs/toolkit';
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from './Reducers';
import rootSaga from './Sagas';

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

if (true === true) middleware = [sagaMiddleware, logger];

const Store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: middleware
});

export default Store

sagaMiddleware.run(rootSaga);