import API from "./apiMap";
import axios from "./axios";

export const API_sendCode = (data) => {
  const opt = {
    url: API.sendCode,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_login = (data) => {
  const opt = {
    url: API.login,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_checkCode = (data) => {
  const opt = {
    url: API.checkCode,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_create = (data) => {
  const opt = {
    url: API.create,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_addFriends = (data) => {
  const opt = {
    url: API.addFriends,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_queryWaitAddFriends = (data) => {
  const opt = {
    url: API.queryWaitAddFriends,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_addFriendsResult = (data) => {
  const opt = {
    url: API.addFriendsResult,
    method: "POST",
    data,
  };
  return axios(opt);
};

export const API_queryFriends = (data) => {
  const opt = {
    url: API.queryFriends,
    method: "POST",
    data,
  };
  return axios(opt);
};