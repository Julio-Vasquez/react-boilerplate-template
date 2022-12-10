import { put, takeLatest, all } from 'redux-saga/effects'

import api from '../../api'
import { ClearData, SaveItem } from '../../utils/storage'
import { login, loginSuccess, loginFailed, logout } from './auth.slice'

function* fetchLogin({ payload }) {
    try {
        const res = yield api.auth.login({ body: payload })

        if (res && !res.error && res?.payload) {
            yield put(
                loginSuccess({
                    token: res?.payload.token,
                    message: res?.message,
                    success: true,
                })
            )
            SaveItem({ newItem: res?.payload.token })
        } else yield put(loginFailed({ error: true, message: res.message }))
    } catch (e) {
        console.log(e)
        yield put(loginFailed({ error: true, message: e.message }))
    }
}

const handleLogout = () => ClearData()

function* ActionWatcher() {
    yield takeLatest(login, fetchLogin)
    yield takeLatest(logout, handleLogout)
}

export default function* AuthSaga() {
    yield all([ActionWatcher()])
}
