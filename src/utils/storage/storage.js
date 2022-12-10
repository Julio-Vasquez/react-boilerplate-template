import jwtDecode from 'jwt-decode'

import { JWT_KEY } from '../constants/environment.constant'

export const SaveItem = ({ key = JWT_KEY, newItem, type = 'localStorage' }) =>
    type === 'sessionStorage'
        ? sessionStorage.setItem(key, newItem)
        : localStorage.setItem(key, newItem)

export const GetItem = ({ key = JWT_KEY }) => localStorage.getItem(key)

export const RemoveItem = ({ key = JWT_KEY, type = 'localStorage' }) =>
    type === 'sessionStorage'
        ? sessionStorage.removeItem(key)
        : localStorage.removeItem(key)

export const TokenIsValid = () => {
    try {
        const token = jwtDecode(JWT_KEY)
        return ![undefined, null, ''].includes(token)
    } catch (e) {
        return false
    }
}

export const ClearData = (key = JWT_KEY) => localStorage.removeItem(key)
