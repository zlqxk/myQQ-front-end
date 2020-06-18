import API from './apiMap';
import axios from './axios';

export const API_sendCode = (data) => {
  const opt = {
    url: API.sendCode,
    method: 'POST',
    data
  }
  return axios(opt)
}

export const API_login = (data) => {
  const opt = {
    url: API.login,
    method: 'POST',
    data
  }
  return axios(opt)
}

export const API_checkCode = (data) => {
  const opt = {
    url: API.checkCode,
    method: 'POST',
    data
  }
  return axios(opt)
}