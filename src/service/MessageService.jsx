import { getTokenStorage } from "../Storage/UserStorage";

const apiNewMessageUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/messages/new";
const apiOutMessagesUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/messages/getAllUserMessagesOut";
const apiInMessagesUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/messages/getAllUserMessagesIn";

export const postNewMessageApi = async (data) => {
  return fetch(apiNewMessageUrl, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenStorage(),
    },
    body: JSON.stringify(data),
  });
};

export const getMessagesInApi = async (apiMessagesUrl) => {
  var result = await fetch(apiInMessagesUrl, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenStorage(),
    },
  });
  return result;
};

export const getMessagesOutApi = async () => {
  var result = await fetch(apiOutMessagesUrl, {
    mode: "cors",
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenStorage(),
    },
  });
  return result;
};
