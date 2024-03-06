import { getTokenStorage } from "../Storage/UserStorage";

const apiGetUserUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/users/getListedUsers";
const apiFindUserUrl = process.env.REACT_APP_API_BASE_URL + "/api/users";
const apiEditUserDetailsUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/users/editDetails";
const apiUploadProfilePictureUrl =
  process.env.REACT_APP_API_BASE_URL + "/api/users/upload/profilePicture";
const apiSetListing =
  process.env.REACT_APP_API_BASE_URL + "/api/users/setListing";

export const getMercenariesApi = async (location) => {
  return fetch(apiGetUserUrl + location.search, {
    mode: "cors",
    method: "GET",
    headers: {
      Authorization: "Bearer " + getTokenStorage(),
    },
  });
};

export const getMercenaryDetailsApi = async (location) => {
  return fetch(
    apiFindUserUrl +
      "?userName=" +
      location.pathname.substring(location.pathname.lastIndexOf("/") + 1),
    {
      mode: "cors",
      method: "GET",
      headers: {
        Authorization: "Bearer " + getTokenStorage(),
      },
    }
  );
};

export const postEditUserDetailsApi = async (credentials) => {
  return fetch(apiEditUserDetailsUrl, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenStorage(),
    },
    body: JSON.stringify(credentials),
  });
};

export const postUploadProfilePictureApi = async (pfp) => {
  if (pfp == null) return;
  const fd = new FormData();
  fd.append("profilePicture", pfp);
  return fetch(apiUploadProfilePictureUrl, {
    mode: "cors",
    method: "POST",
    headers: {
      Authorization: "Bearer " + getTokenStorage(),
    },
    body: fd,
  });
};

export const postSetUserListingApi = async (isListed) => {
  return fetch(apiSetListing, {
    mode: "cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getTokenStorage(),
    },
    body: JSON.stringify(isListed),
  });
};
