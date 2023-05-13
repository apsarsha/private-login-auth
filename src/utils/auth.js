import jwtDecode from 'jwt-decode';

const TOKEN_KEY = 'jwtToken';

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function removeToken() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  const token = getToken();
  return token && jwtDecode(token).exp > Date.now() / 1000;
}
