const apiLoginUrl = process.env.REACT_APP_API_BASE_URL + "/api/users/login";
const apiRegisterUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/users/register";

export const postLoginApi = async (credentials) => {
  return fetch(apiLoginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};

export const postRegisterApi = async (credentials) => {
  return fetch(apiRegisterUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
};
