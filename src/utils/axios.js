import axios from "axios";

const DOMAIN = "http://localhost:3000";
// axios.defaults.withCredentials = true; // 쿠키 데이터를 전송받기
export const request = (method, url, data) => {
  return axios({
    method,
    url: DOMAIN + url,
    data,
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export const instnace = axios.create({
  baseURL: process.env.REACT_APP_HOST,
});
