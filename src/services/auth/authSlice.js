import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
  authentication: false,
  error: false,
  success: true,
  loading: false,
  token: '',
  message: '',
  username: '',
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    //login(username, password)
    login(state, { payload }) {
      const { username } = payload
      state.loading = true
      state.error = false
      state.success = false
      state.message = 'Cargando'
      state.username = username
    },
    //loginSuccess(token)
    loginSuccess(state, { payload }) {
      state.loading = false
      state.error = false
      state.success = true
      state.message = 'SUCCESS_LOGIN'
      state.token = payload
      state.authentication = true
    },
    //loginFailed(message)
    loginFailed(state, { payload }) {
      state.loading = false
      state.error = true
      state.success = false
      state.message = payload
      state.token = ''
      state.authentication = true
    },
    logout() {},
  },
})

export const { login, loginSuccess, loginFailed, logout } = AuthSlice.actions

export default AuthSlice.reducer
