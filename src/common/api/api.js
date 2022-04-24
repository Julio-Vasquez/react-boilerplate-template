import { Storage } from './../token/tokens'
import { auth } from './../../services/auth/actions'
import { store } from './../../store'

const BASE_URL_API = 'se cambiara'

const errorJson = {
  400: 'No se pudo interpretar la solicitud dada',
  401: 'No Autorizado',
  404: 'El servidor no pudo encontrar el contenido solicitado',
}

const validateResponse = ({ status }) => {
  message.error(errorJson[status])
  store.dispatch(auth.logout())
}

export const GET = async ({ url }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: `Bearer ${Storage.GetToken()}`,
    },
  })
    .then(async res => {
      if (res.statusText !== 'OK') validateResponse({ status: res.status })
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const POST = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'POST',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          'Access-Control-Allow-Origin': 'https://javascript.info',
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.statusText !== 'OK') validateResponse({ status: res.status })
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const PUT = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'PUT',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
    body: JSON.stringify(body),
  })
    .then(async res => {
      if (res.statusText !== 'OK') validateResponse({ status: res.status })
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}

export const DELETE = async ({ url, body = {}, header = {} }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'DELETE',
    headers: header
      ? header
      : {
          Accept: 'application/json',
          'Content-type': 'application/json',
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
    body: body ? JSON.stringify(body) : '',
  })
    .then(async res => {
      if (res.statusText !== 'OK') validateResponse({ status: res.status })
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
