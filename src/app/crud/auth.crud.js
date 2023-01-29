import axios from "axios";

//export const LOGIN_URL = "api/auth/login";
export const LOGIN_URL = "http://localhost:3001/api/auth/loginUser";
//export const LOGIN_URL = "http://localhost:3001/api/auth/loginUser";
export const REGISTER_URL = "api/auth/register";
export const REQUEST_PASSWORD_URL = "api/auth/forgot-password";
//export const LOGIN_URL = "https://365truck.fdssoft.com/server/admin/auth/loginAdmin";
//export const ME_URL = "api/me";
//export const ME_URL = "http://localhost:3001/api/showUser";
export const ME_URL = " http://localhost:3001/api/showUser";
export const GET_DRIVER = "http://localhost:3001/api/showDriver";

export function login(user_name, password) {
  console.log(user_name);
  return axios.post(LOGIN_URL, {user_name, password });
}

export function getToken(email, password) {
  return axios.post(LOGIN_URL, { email, password })
  .then((response) => console.log(response.data));
}

export function register(email, fullname, username, password) {
  return axios.post(REGISTER_URL, { email, fullname, username, password });
}

export function requestPassword(email) {
  return axios.post(REQUEST_PASSWORD_URL, { email });
}

export function getUserByToken() {
  // Authorization head should be fulfilled in interceptor.
  return axios.get(ME_URL);
  // return axios.get(ME_URL)
  //     .then((response) => console.log(response.data));
}

export function get() {
  return axios.GET(GET_DRIVER);
}
