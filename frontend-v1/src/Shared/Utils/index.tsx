export function getToken() {
  return localStorage.getItem("token");
}

export function setToken(accessToken: string) {
  localStorage.setItem('token', accessToken);
}

export function setRefreshToken(refreshToken: string) {
  localStorage.setItem('refreshToken', refreshToken);
}
