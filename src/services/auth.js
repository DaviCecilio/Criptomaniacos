export const TOKEN_KEY = '@criptomaniacos-Token';
export const isAuthenticated = () => localStorage.getItem("TOKEN_KEY") !== null;
export const getToken = () => localStorage.getItem("TOKEN_KEY");
export const traderId = 3;
export const login = token => {
  localStorage.setItem("TOKEN_KEY", token);
};
export const logout = () => {
  localStorage.removeItem("TOKEN_KEY");
};
