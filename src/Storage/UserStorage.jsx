export const setUsernameStorage = (userName) => {
  localStorage.setItem("username", userName?.toLowerCase());
};

export const getUsernameStorage = () => {
  return localStorage.getItem("username");
};

export const removeUsernameStorage = () => {
  localStorage.removeItem("username");
};

export const setTokenStorage = (token) => {
  localStorage.setItem("token", token);
};

export const getTokenStorage = () => {
  return localStorage.getItem("token");
};

export const removeTokenStorage = () => {
  localStorage.removeItem("token");
};
