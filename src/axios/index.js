import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1",
  withCredentials: true,
});

// Login
const Login = async (id, password) => {
  return await instance.post("/user/login", {
    id,
    password,
  });
};

// Signup
const Signup = async (email, password) => {
  return await instance.post("/user/signup", {
    email,
    password,
  });
};

export { Login, Signup };
