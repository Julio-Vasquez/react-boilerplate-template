import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { configureStore } from '@reduxjs/toolkit'

import rootSaga from './Sagas'
import appReducer from './Reducers'

const sagaMiddleware = createSagaMiddleware()

let middleware = [sagaMiddleware]

if (true === true) middleware = [sagaMiddleware, logger]

const Store = configureStore({
    reducer: appReducer,
    devTools: true,
    middleware: middleware,
})

export default Store

sagaMiddleware.run(rootSaga)
