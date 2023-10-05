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

// PostIngredient
const PostIngredient = async (accessToken, ingredient) => {
  const formData = new FormData();
  formData.append(
    "ingredientRequestDto",
    JSON.stringify({
      name: ingredient,
      expiration_date: "2023-10-30",
      calories: 0,
      carbs: 0,
      fat: 0,
      protein: 0,
    })
  );
  formData.append("image", "string");

  return await instance.post("/ingredient-by-user", formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

// GetFood
const GetFood = async (accessToken, ingredient1, ingredient2, ingredient3) => {
  return await instance.post(
    "/food-by-ingredient",
    {
      food1: ingredient1,
      food2: ingredient2,
      food3: ingredient3,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export { Login, Signup, GetUserInfo, PostIngredient, GetFood };
