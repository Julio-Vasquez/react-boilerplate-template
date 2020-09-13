import { Storage } from "./../token/tokens";
import { auth } from "./../../services/auth/actions";
import { store } from "./../../store";

const API_URL = "se cambiara";
class Api {
  GET(url) {
    url = new URL(`${API_URL}/${url}`);
    return fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Storage.GetToken()}`,
      },
    })
      .then(async res => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch(err => err);
  }

  POST(url, body, header) {
    let dataBody = JSON.stringify(body);
    return fetch(`${API_URL}/${url}`, {
      method: "POST",
      headers: header
        ? header
        : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
      body: dataBody,
    })
      .then(async res => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch(err => err);
  }

  PUT(url, body, header) {
    return fetch(`${API_URL}/${url}`, {
      method: "PUT",
      headers: header
        ? header
        : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
      body: JSON.stringify(body),
    })
      .then(async res => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch(res => res);
  }

  DELETE(url, body, header) {
    return fetch(`${API_URL}/${url}`, {
      method: "DELETE",
      headers: header
        ? header
        : {
          Accept: "application/json",
          "Content-type": "application/json",
          Authorization: `Bearer ${Storage.GetToken()}`,
        },
      body: body ? body : "",
    })
      .then(async res => {
        if (res.status === 401) {
          store.dispatch(auth.logout());
          return res;
        }
        res.payload = await res.json();
        return res;
      })
      .catch(err => err);
  }
}

export const Api = new Api();