import { decode } from "jsonwebtoken";
import jwt_decode from "jwt-decode";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function setToken(token: string) {
  if (token) {
    const decodeToken: any = jwt_decode(token);

    cookies.set("auth_token", token, {
      expires: new Date(decodeToken.exp * 1000),
    });
  }
}

export function getUser() {
  const authToken = cookies.get("auth_token");

  if (authToken) {
    const user: any = jwt_decode(authToken);
    if (user) {
      return user;
    }
  }
  return null;
}

