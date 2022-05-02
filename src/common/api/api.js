import { Storage } from './../token/tokens'
import { validateResponse } from '../messages/responseMessage'

const BASE_URL_API = 'se cambiara'

const defaultHeader = {
  Accept: 'application/json',
  'Content-type': 'application/json',
  'Access-Control-Allow-Origin': 'https://javascript.info',
  Authorization: `Bearer ${Storage.GetToken()}`,
}

export const GET = async ({ url }) => {
  return fetch(`${BASE_URL_API}/${url}`, {
    method: 'GET',
    headers: defaultHeader,
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
    headers: header ? header : defaultHeader,
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
    headers: header ? header : defaultHeader,
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
    headers: header ? header : defaultHeader,
    body: body ? JSON.stringify(body) : '',
  })
    .then(async res => {
      if (res.statusText !== 'OK') validateResponse({ status: res.status })
      res.payload = await res.json()
      return res
    })
    .catch(error => message.error(error))
}
