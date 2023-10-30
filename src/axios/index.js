import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
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

// SetMinNutrient
const SetMinNutrient = async (accessToken, minCal) => {
  return await instance.put(
    "/user/min-nutrients",
    {
      calories: minCal,
      carbs: 0,
      fat: 0,
      protein: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// SetMaxNutrient
const SetMaxNutrient = async (accessToken, maxCal) => {
  return await instance.put(
    "/user/max-nutrients",
    {
      calories: maxCal,
      carbs: 0,
      fat: 0,
      protein: 0,
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

// PostIngredient
const PostIngredient = async (accessToken, ingredient, image) => {
  // FormData 생성
  const formData = new FormData();

  // JSON 데이터 추가
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

  // 이미지 파일 추가
  formData.append("image", image);

  // 데이터 전송
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

// GetFoodByNut
const GetFoodByNut = async (accessToken) => {
  return await instance.get("/food-by-nutrients", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// GetRandomFood
const GetRandomFood = async (accessToken) => {
  return await instance.get("/favorite-food/random-food", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

// AddFavoriteFood
const AddFavoriteFood = async (
  accessToken,
  FoodID1,
  FoodID2,
  FoodID3,
  FoodID4,
  FoodID5
) => {
  return await instance.post(
    "/favorite-food",
    {
      favoriteFoodList: [FoodID1, FoodID2, FoodID3, FoodID4, FoodID5],
    },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    }
  );
};

export {
  Login,
  Signup,
  GetUserInfo,
  SetMinNutrient,
  SetMaxNutrient,
  PostIngredient,
  GetFood,
  GetFoodByNut,
  GetRandomFood,
  AddFavoriteFood,
};
