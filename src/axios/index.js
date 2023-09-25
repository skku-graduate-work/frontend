import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8080/api/v1",
  withCredentials: true,
});

// Login
const Login = async (email, password) => {
  return await instance.post("/user/login", {
    email,
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

// GetUserInfo
const GetUserInfo = async (accessToken) => {
  return await instance.get("/user/ingredient", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// GetFood
const GetFood = async (accessToken, food) => {
  return await instance.post(
    "/food-by-ingredient",
    {
      food,
    },
    { headers: accessToken }
  );
};

export { Login, Signup, GetUserInfo, GetFood };
