import axios from "axios";

// Spoonacular API 키
const apiKey = "7b29d3fbb7dd4cff86d4c0131951a9ff";

const instance = axios.create({
  baseURL: "https://api.spoonacular.com/recipes/",
  withCredentials: false,
});

// Get similar food from spoonacular
const GetSimilarFood = async (id) => {
  return await instance.get(`${id}/similar?apiKey=${apiKey}`);
};

// Get food information from spoonacular
const GetFoodInformation = async (id) => {
  return await instance.get(`${id}/information?apiKey=${apiKey}`);
};

export { GetSimilarFood, GetFoodInformation };
