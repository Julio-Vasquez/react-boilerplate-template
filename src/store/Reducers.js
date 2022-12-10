import { combineReducers } from '@reduxjs/toolkit'

import { AUTH } from '../utils/constants/redux.constants'

import authReducer, {
    initialState as initialStateAuth,
} from '../services/Auth/auth.slice'

const appReducer = combineReducers({
    [AUTH]: authReducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'auth/logout')
        state = {
            [AUTH]: initialStateAuth,
        }
    return appReducer(state, action)
}

export default rootReducer
