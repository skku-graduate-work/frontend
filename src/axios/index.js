import axios from "axios";

var host = window.location.host;
if (host.includes(":")) {
  host = host.split(":")[0];
}

let instance = axios.create({
  baseURL: `${process.env.REACT_APP_PROTOCAL}://${host}:${process.env.REACT_APP_PORT}/api`,
  withCredentials: true,
  // headers: { 'Content-Type': 'multipart/form-data' },
  timeout: 5000,
});

const getInstance = () => {
  return instance;
};

// Login
const Login = async (email) => {
  return await instance.post(`/login`, {
    email: email,
  });
};
