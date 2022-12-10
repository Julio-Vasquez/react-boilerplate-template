import { URL_API } from '../constants/environment.constant'
import { RESPONSE_API } from '../constants/response.constant'

export const getHeader = token => {
    const exists = token !== null && { Authorization: `Bearer ${token}` }
    return {
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://javascript.info',
            ...exists,
        },
    }
}

export const getUrl = ({ url, params }) => {
    const _url = new URL(`${URL_API}/${url}`)
    if (params)
        Object.keys(params).forEach(key =>
            _url.searchParams.append(key, params[key])
        )
    return _url
}

export const Methods = {
    delete: 'DELETE',
    get: 'GET',
    patch: 'PATCH',
    post: 'POST',
    put: 'PUT',
}

export const validateResponse = status => {}
