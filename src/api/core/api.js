import store from '../../store'
import { GetItem } from '../../utils/storage'
import { getHeader, getUrl } from '../../utils/api/api.util'
import { logout } from '../../services/Auth/auth.slice'
import { MAX_TIME_FETCH } from '../../utils/constants/environment.constant'

const Query = async ({ url, params }) => {
    const newUrl = getUrl({ url, params })

    return fetch(newUrl, { method: 'GET', ...getHeader(GetItem({})) })
        .then(async res => {
            if (res.status === 401) {
                store.dispatch(logout())
                return res
            }
            res = await res.json()
            return res
        })
        .catch(error => error)
}

const Mutation = async ({ url, body, params, method }) => {
    const newUrl = getUrl({ url, params })

    return Promise.race([
        fetch(newUrl, {
            method,
            ...getHeader(GetItem({})),
            body: JSON.stringify(body),
        }),
        new Promise((_res, rej) =>
            setTimeout(() => rej({ payload: { error: 'TIMEOUT' } }), MAX_TIME_FETCH)
        ),
    ])
        .then(async res => {
            if (res.status === 401) {
                store.dispatch(logout())
                return res
            }
            res = await res.json()
            return res
        })
        .catch(err => err)
}

export { Query, Mutation }
