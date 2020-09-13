const jwtDecode = require("jwt-decode");

class Storage {
  Decode = (token) => jwtDecode(token || this.GetToken());

  IsTokenValid = () => {
    try {
      const currentToken = jwtDecode(this.GetToken());
      return (
        currentToken !== undefined &&
        currentToken.exp >= Math.round(new Date().getTime() / 1000)
      );
    } catch (e) {
      return false;
    }
  };

  CheckToken = (token) => {
    try {
      return jwtDecode(token) !== undefined;
    } catch (e) {
      return false;
    }
  };

  GetToken = () => {
    return localStorage.getItem("mltoken");
  };

  SetToken = (token, type) => {
    if (type === "session") return sessionStorage.setItem("mltoken", token);
    return localStorage.setItem("mltoken", token);
  };

  RemoveToken = () => localStorage.removeItem("mltoken");
}

export const Storage = new Storage();
