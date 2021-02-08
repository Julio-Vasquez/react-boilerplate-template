import { put, takeLatest, all } from "redux-saga/effects";
import { login, loginSuccess } from './authSlice'

//const FetchLogout = () => localStorage.clear();

//all methods receive 2 parameters, type and payload
function* FetchLogin({type, payload}) {
  console.log('Estoy en la saga 3:D')
  console.log(payload);
  console.log(type);
  yield put(loginSuccess('Logeado'))
}

function* ActionWatcher() {
  yield takeLatest(login, FetchLogin);
  //yield takeLatest(auth.logout, FetchLogout);
}

export default function* AuthSaga() {
  yield all([ActionWatcher()]);
}