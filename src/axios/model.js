import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5000",
  withCredentials: true,
});

// GetRecommendation
const GetRecommendation = async (input_food_list) => {
  return await instance.post("/get_similar_foods", {
    input_food_list: input_food_list,
  });
};

export { GetRecommendation };
